import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative w-full h-[600px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('assets/images/mountains.png');"></div>
      
      <!-- Overlay (optional, to make text readable) -->
      <div class="absolute inset-0 bg-black/20"></div>

      <!-- Title -->
      <div class="absolute bottom-16 left-0 w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-wide drop-shadow-md">
            Новости
          </h1>
        </div>
      </div>
    </section>

    <!-- News List Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col">
          
          <!-- News Item 1 -->
          <a routerLink="/news/detail" class="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 border-b border-gray-200 reveal hover:bg-gray-50 transition-colors cursor-pointer group">
            
            <!-- Date -->
            <div class="flex-shrink-0 w-32 flex flex-col pt-2">
              <span class="text-xl lg:text-2xl font-medium text-dark uppercase tracking-wider">Июнь</span>
              <span class="text-6xl lg:text-8xl font-medium text-dark leading-none mt-1">20</span>
            </div>

            <!-- Image -->
            <div class="flex-shrink-0 w-full lg:w-1/2 max-w-[600px]">
              <img src="assets/images/news1.png" alt="News 1" class="w-full h-auto object-cover rounded-sm">
            </div>

            <!-- Content -->
            <div class="flex flex-col justify-center max-w-lg">
              <h3 class="text-2xl font-medium text-dark mb-4 leading-tight group-hover:text-accent transition-colors">Dataway расширяет партнерство с HP</h3>
              <p class="text-sm text-gray-500 mb-8 font-medium leading-relaxed">
                Расширили линейку поставляемого серверного оборудования и получили новый уровень партнерского статуса.
              </p>
              <div class="mt-auto lg:mt-0">
                <!-- Long arrow -->
                <svg class="w-16 h-6 text-dark group-hover:text-accent transition-colors" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10H58M58 10L48 2M58 10L48 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

          </a>

          <!-- News Item 2 -->
          <a routerLink="/news/detail" class="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 border-b border-gray-200 reveal hover:bg-gray-50 transition-colors cursor-pointer group">
            
            <!-- Date -->
            <div class="flex-shrink-0 w-32 flex flex-col pt-2">
              <span class="text-xl lg:text-2xl font-medium text-dark uppercase tracking-wider">Июнь</span>
              <span class="text-6xl lg:text-8xl font-medium text-dark leading-none mt-1">10</span>
            </div>

            <!-- Image -->
            <div class="flex-shrink-0 w-full lg:w-1/2 max-w-[600px]">
              <!-- Reusing news1.png as placeholder as per mockup -->
              <img src="assets/images/news1.png" alt="News 2" class="w-full h-auto object-cover rounded-sm">
            </div>

            <!-- Content -->
            <div class="flex flex-col justify-center max-w-lg">
              <h3 class="text-2xl font-medium text-dark mb-4 leading-tight group-hover:text-accent transition-colors">Новое HCI-решение для дата-центров</h3>
              <p class="text-sm text-gray-500 mb-8 font-medium leading-relaxed">
                Представили гиперконвергентную платформу для компаний, которым важны масштабируемость и отказоустойчивость.
              </p>
              <div class="mt-auto lg:mt-0">
                <!-- Long arrow -->
                <svg class="w-16 h-6 text-dark group-hover:text-accent transition-colors" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10H58M58 10L48 2M58 10L48 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

          </a>

          <!-- News Item 3 -->
          <a routerLink="/news/detail" class="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 border-b border-gray-200 reveal hover:bg-gray-50 transition-colors cursor-pointer group">
            
            <!-- Date -->
            <div class="flex-shrink-0 w-32 flex flex-col pt-2">
              <span class="text-xl lg:text-2xl font-medium text-dark uppercase tracking-wider">Июнь</span>
              <span class="text-6xl lg:text-8xl font-medium text-dark leading-none mt-1">5</span>
            </div>

            <!-- Image -->
            <div class="flex-shrink-0 w-full lg:w-1/2 max-w-[600px]">
              <!-- Reusing news1.png as placeholder as per mockup -->
              <img src="assets/images/news1.png" alt="News 3" class="w-full h-auto object-cover rounded-sm">
            </div>

            <!-- Content -->
            <div class="flex flex-col justify-center max-w-lg">
              <h3 class="text-2xl font-medium text-dark mb-4 leading-tight group-hover:text-accent transition-colors">Dataway расширяет партнерство с HP</h3>
              <p class="text-sm text-gray-500 mb-8 font-medium leading-relaxed">
                Расширили линейку поставляемого серверного оборудования и получили новый уровень партнерского статуса.
              </p>
              <div class="mt-auto lg:mt-0">
                <!-- Long arrow -->
                <svg class="w-16 h-6 text-dark group-hover:text-accent transition-colors" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10H58M58 10L48 2M58 10L48 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

          </a>

          <!-- Pagination -->
          <div class="pt-12 pb-8 reveal">
            <a href="#" class="inline-flex items-center text-dark hover:text-accent transition-colors">
              <svg class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span class="text-sm font-semibold">Предыдущие новости</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  `
})
export class NewsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    window.scrollTo(0, 0); // scroll to top when route loads
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = this.el.nativeElement.querySelectorAll('.reveal');
    hiddenElements.forEach((el: Element) => observer.observe(el));
  }
}
