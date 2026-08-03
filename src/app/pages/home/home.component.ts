
import { Component, AfterViewInit, ElementRef, HostListener, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
<section id="home" class="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden flex items-center min-h-screen bg-[#91969B]">

  <!-- Floating Socials Widget -->
<div class="absolute right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
  <a href="#" class="w-6 h-6 hover:scale-110 transition-transform opacity-80 hover:opacity-100 flex items-center justify-center cursor-pointer">
    <img src="assets/images/telegram_white.png" alt="Telegram" class="w-full h-full object-contain">
  </a>
  <a href="#" class="w-6 h-6 hover:scale-110 transition-transform opacity-80 hover:opacity-100 flex items-center justify-center cursor-pointer">
    <img src="assets/images/linkedin_white.png" alt="LinkedIn" class="w-full h-full object-contain">
  </a>
  <a href="#" class="w-6 h-6 hover:scale-110 transition-transform opacity-80 hover:opacity-100 flex items-center justify-center cursor-pointer">
    <img src="assets/images/whatsapp_white.png" alt="WhatsApp" class="w-full h-full object-contain">
  </a>
</div>



  <!-- Animated Hero Orbs Background -->
  <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div class="hero-orb orb-1"></div>
    <div class="hero-orb orb-2"></div>
    <div class="hero-orb orb-3"></div>
    <div class="hero-orb orb-4"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
    <div class="flex flex-col gap-3 max-w-4xl reveal">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-16 drop-shadow-lg">
        Оборудование и решения<br class="hidden md:block"> для корпоративной<br class="hidden md:block"> IT-инфраструктуры
      </h1>
      <p class="text-xl text-gray-200 max-w-2xl mb-16 reveal delay-100 font-medium leading-normal">
        Серверы, сетевое оборудование, системы хранения данных и HCI-решения под задачи вашего бизнеса.
      </p>
      <div class="reveal delay-200">
        <button (click)="openModal()" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md text-dark bg-cream-light hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer">
          Связаться с нами
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Process Section -->
<section class="py-24 bg-white relative overflow-hidden">
  <!-- Subtle Orange Blur Effect -->
  <div class="absolute top-1/4 right-0 w-[500px] h-[500px] z-0 pointer-events-none">
    <div class="orange-blur opacity-30"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="flex flex-col items-center gap-3 text-center mb-20 reveal">
      <h2 class="text-4xl font-normal text-dark tracking-tight mb-4">От запроса к результату</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Подготавливаем детальное техническое и коммерческое предложение с оптимальными сроками поставки и прозрачными условиями.
      </p>
    </div>

    <div class="relative">
      <!-- Timeline Central Line -->
      <div class="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

      <!-- Step 1 -->
      <div class="relative flex flex-col md:flex-row items-center mb-24 reveal">
        <div class="w-full md:w-1/2 flex justify-center md:justify-end md:pr-20 mb-8 md:mb-0">
          <img src="assets/images/feature-email.png" alt="Заявка" class="w-48 h-auto object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-6 w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center font-bold z-10 text-sm shadow-md">1</div>
        <div class="w-full md:w-1/2 md:pl-20 max-md:pl-16 text-left md:text-left">
          <h3 class="text-2xl font-normal text-dark mb-3">Заявка</h3>
          <p class="text-gray-600">Оставьте запрос любым удобным способом. Мы свяжемся с вами, чтобы уточнить задачи, требования и цели проекта.</p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="relative flex flex-col md:flex-row-reverse items-center mb-24 reveal">
        <div class="w-full md:w-1/2 flex justify-center md:justify-start md:pl-20 mb-8 md:mb-0">
          <img src="assets/images/architecture-design.png" alt="Подбор решения" class="w-48 h-auto object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-6 w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center font-bold z-10 text-sm shadow-md">2</div>
        <div class="w-full md:w-1/2 md:pr-20 max-md:pl-16 text-left md:text-right">
          <h3 class="text-2xl font-normal text-dark mb-3">Подбор решения</h3>
          <p class="text-gray-600">Анализируем инфраструктуру и подбираем оптимальную конфигурацию серверного, сетевого оборудования, СХД или HCI под ваши задачи.</p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="relative flex flex-col md:flex-row items-center mb-24 reveal">
        <div class="w-full md:w-1/2 flex justify-center md:justify-end md:pr-20 mb-8 md:mb-0">
          <img src="assets/images/document-check.png" alt="Коммерческое предложение" class="w-48 h-auto object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-6 w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center font-bold z-10 text-sm shadow-md">3</div>
        <div class="w-full md:w-1/2 md:pl-20 max-md:pl-16 text-left md:text-left">
          <h3 class="text-2xl font-normal text-dark mb-3">Коммерческое предложение</h3>
          <p class="text-gray-600">Подготавливаем детальное техническое и коммерческое предложение с оптимальными сроками поставки и прозрачными условиями.</p>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="relative flex flex-col md:flex-row-reverse items-center mb-24 reveal">
        <div class="w-full md:w-1/2 flex justify-center md:justify-start md:pl-20 mb-8 md:mb-0">
          <img src="assets/images/fast-delivery.png" alt="Поставка оборудования" class="w-48 h-auto object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-6 w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center font-bold z-10 text-sm shadow-md">4</div>
        <div class="w-full md:w-1/2 md:pr-20 max-md:pl-16 text-left md:text-right">
          <h3 class="text-2xl font-normal text-dark mb-3">Поставка оборудования</h3>
          <p class="text-gray-600">Организуем своевременную поставку оборудования, контролируем комплектацию и обеспечиваем сохранность на всех этапах.</p>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="relative flex flex-col md:flex-row items-center reveal">
        <div class="w-full md:w-1/2 flex justify-center md:justify-end md:pr-20 mb-8 md:mb-0">
          <img src="assets/images/system-integration.png" alt="Внедрение" class="w-48 h-auto object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 max-md:left-6 w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center font-bold z-10 text-sm shadow-md">5</div>
        <div class="w-full md:w-1/2 md:pl-20 max-md:pl-16 text-left md:text-left">
          <h3 class="text-2xl font-normal text-dark mb-3">Внедрение</h3>
          <p class="text-gray-600">Выполняем настройку, ввод в эксплуатацию и техническое сопровождение, чтобы инфраструктура была готова к работе с первого дня.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Services / Offerings -->



<!-- Certificates Section -->
<section id="certificates" class="py-24 bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 reveal active">
      <h2 class="text-4xl font-normal text-dark tracking-tight">Партнёрские сертификаты</h2>
    </div>
    
    <!-- Carousel Container -->
    <div class="relative w-full overflow-hidden" (mouseenter)="pauseCarousel()" (mouseleave)="resumeCarousel()">
      <div class="flex gap-8 transition-transform duration-[100ms] ease-linear w-max cursor-grab active:cursor-grabbing" 
           #carouselContainer
           [style.transform]="'translateX(' + currentTranslate + 'px)'"
           (mousedown)="onDragStart($event)" 
           (touchstart)="onDragStart($event)"
           (mousemove)="onDragMove($event)" 
           (touchmove)="onDragMove($event)"
           (mouseup)="onDragEnd()" 
           (mouseleave)="onDragEnd()"
           (touchend)="onDragEnd()">
        
        @for (cert of displayCertificates; track $index) {
          <div class="flex-shrink-0 w-[300px] md:w-[400px] group">
            <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 transform group-hover:-translate-y-2">
              <a [href]="cert.url" target="_blank" class="block cursor-pointer">
                <!-- Using index from absolute display list to ensure unique IDs if needed, or simply render canvas inside ts -->
                <div [id]="'pdf-container-' + $index" class="w-full min-h-[400px] rounded shadow-sm bg-gray-50 flex items-center justify-center overflow-hidden">
                  <canvas [id]="'pdf-canvas-' + $index" class="w-full h-auto"></canvas>
                  <!-- Loading skeleton -->
                  <div [id]="'pdf-loader-' + $index" class="absolute text-gray-400">
                     <svg class="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                </div>

              </a>
            </div>
          </div>
        }
      </div>
    </div>
  </div>
</section>

<!-- News Section -->


<!-- Partners Section -->
<section class="py-24 bg-white border-b border-gray-100">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 reveal">
      <h2 class="text-4xl font-normal text-dark tracking-tight">Наши партнёры</h2>
    </div>

    <div class="flex flex-wrap justify-center items-center gap-12 md:gap-24 reveal delay-100">
      <img src="assets/images/hp.png" alt="HP Logo" class="h-16 md:h-30 object-contain ">
      <img src="assets/images/NZS.png" alt="Partner Logo" class="h-16 md:h-30 object-contain ">
      <img src="assets/images/sangfor.png" alt="Sangfor Logo" class="h-16 md:h-25 object-contain ">
    </div>
  </div>
</section>

<!-- Target Audience -->
<section class="py-24 bg-cream-light relative overflow-hidden">
  <!-- Subtle Orange Blur Effect -->
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] z-0 pointer-events-none">
    <div class="orange-blur opacity-30"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-16 reveal">
      <h2 class="text-4xl font-normal text-dark tracking-tight">Для кого мы работаем</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
      <div class="flex items-start space-x-4 reveal delay-100">
        <svg class="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <h3 class="text-xl font-normal text-dark mb-3">Государственный сектор</h3>
          <p class="text-gray-600 leading-relaxed">
            Госорганизациям важны надёжность, безопасность и соответствие нормативам. Поставляем оборудование через официальные каналы с полным пакетом документов — с учётом специфики государственных закупок и требований к хранению данных.
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4 reveal delay-200">
        <svg class="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <h3 class="text-xl font-normal text-dark mb-3">Финансовый сектор</h3>
          <p class="text-gray-600 leading-relaxed">
            Банкам и финансовым организациям критична бесперебойная работа систем и защита данных. Подбираем отказоустойчивые серверы, СХД и решения с высокой доступностью, рассчитанные на круглосуточную нагрузку и строгие требования к безопасности.
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4 reveal delay-300">
        <svg class="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <h3 class="text-xl font-normal text-dark mb-3">Телекоммуникации</h3>
          <p class="text-gray-600 leading-relaxed">
            Операторам связи нужна производительная сетевая инфраструктура и вычислительные мощности под растущий трафик. Поставляем коммутаторы, серверы и системы хранения для дата-центров и узлов связи любого масштаба.
          </p>
        </div>
      </div>

      <div class="flex items-start space-x-4 reveal delay-400">
        <svg class="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <h3 class="text-xl font-normal text-dark mb-3">Промышленность и производство</h3>
          <p class="text-gray-600 leading-relaxed">
            Производственным предприятиям нужна устойчивая IT-инфраструктура для управления процессами, хранения данных и цифровизации. Подбираем оборудование, способное стабильно работать и обеспечивать непрерывность ключевых систем.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA & Footer Section -->
<section id="contact" class="bg-white">
  <div class="flex flex-col gap-5 justify-center items-center py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center reveal">
    <h2 class="text-4xl md:text-5xl font-normal text-dark tracking-tight mb-16">Готовы обсудить ваш проект?</h2>
    <p class="text-xl text-gray-600 mb-20 max-w-xl mx-auto leading-normal">
      Оставьте заявку — подберём оборудование под вашу задачу и подготовим коммерческое предложение.
    </p>
    <button (click)="openModal()" class="w-[236px] items-center justify-center px-10 py-4 border-2 border-gray-300 text-base font-semibold rounded-md text-dark bg-transparent hover:border-dark hover:bg-gray-50 transition-all duration-300 cursor-pointer">
      Оставить заявку
    </button>
  </div>

  <!-- Footer -->
  `
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('certSlider') certSlider!: ElementRef;
  private scrollInterval: any;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
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

  openModal() {
    const appComponent = (window as any).appComponentRef;
    if (appComponent) appComponent.isModalOpen.set(true);
  }
}
