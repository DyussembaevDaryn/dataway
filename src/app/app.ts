import { Component, signal, AfterViewInit, ElementRef, HostListener, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('certSlider') certSlider!: ElementRef;
  private scrollInterval: any;
  isMenuOpen = signal(false);
  isModalOpen = signal(false);
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  certificates = [
    { url: 'assets/certificates/CP_TK_20251209_01_VAD_Certificate_Private_Company_Dataway_Ltd.pdf' },
    { url: 'assets/certificates/Certificate.pdf' },
    { url: 'assets/certificates/HPE Certificate - DW.pdf' }
  ];
  displayCertificates: any[] = [];
  
  currentTranslate = 0;
  isDragging = false;
  startX = 0;
  prevTranslate = 0;
  animationFrameId: any;
  autoScrollSpeed = 0.5;
  isPaused = false;

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {
    // Duplicate certificates for endless scroll effect (3 sets)
    this.displayCertificates = [...this.certificates, ...this.certificates, ...this.certificates, ...this.certificates];
  }


  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const hiddenElements = this.el.nativeElement.querySelectorAll('.reveal');
    hiddenElements.forEach((el: Element) => observer.observe(el));
    
    this.renderPdfs();
    this.startAutoScroll();
  }

  async renderPdfs() {
    const pdfjsLib = (window as any)['pdfjs-dist/build/pdf'] || (window as any).pdfjsLib;
    if (!pdfjsLib) return;
    
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

    for (let i = 0; i < this.displayCertificates.length; i++) {
      const cert = this.displayCertificates[i];
      try {
        const loadingTask = pdfjsLib.getDocument(cert.url);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        
        const canvas = document.getElementById('pdf-canvas-' + i) as HTMLCanvasElement;
        const loader = document.getElementById('pdf-loader-' + i);
        if (canvas) {
          const context = canvas.getContext('2d');
          const viewport = page.getViewport({ scale: 1.5 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          await page.render({
            canvasContext: context,
            viewport: viewport
          }).promise;
          
          if (loader) loader.style.display = 'none';
        }
      } catch (err) {
        console.error('Error rendering PDF:', err);
      }
    }
  }

  startAutoScroll() {
    const animate = () => {
      if (!this.isPaused && !this.isDragging) {
        this.currentTranslate -= this.autoScrollSpeed;
        
        const itemWidth = window.innerWidth < 768 ? 332 : 432;
        const totalOriginalWidth = itemWidth * this.certificates.length;
        
        if (this.currentTranslate <= -totalOriginalWidth) {
          this.currentTranslate += totalOriginalWidth;
        }
        
        this.cdr.detectChanges();
      }
      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  pauseCarousel() {
    this.isPaused = true;
  }

  resumeCarousel() {
    this.isPaused = false;
  }

  onDragStart(event: any) {
    this.isDragging = true;
    this.startX = this.getPositionX(event);
    this.prevTranslate = this.currentTranslate;
  }

  onDragMove(event: any) {
    if (!this.isDragging) return;
    const currentPosition = this.getPositionX(event);
    const diff = currentPosition - this.startX;
    this.currentTranslate = this.prevTranslate + diff;
    this.cdr.detectChanges();
  }

  onDragEnd() {
    this.isDragging = false;
  }

  getPositionX(event: any): number {
    return event.type.includes('mouse') 
      ? event.pageX 
      : event.touches[0].clientX;
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  openModal() {
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen.set(false);
    document.body.style.overflow = '';
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
