import { Component, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen flex flex-col md:flex-row bg-white">
      
      <!-- Left Side (Image) -->
      <div class="w-full md:w-[40%] lg:w-[45%] relative min-h-[300px] md:min-h-screen">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('assets/images/wave.png');"></div>
        
        <!-- Logo on the image -->
        <div class="absolute top-8 left-8 md:top-12 md:left-12 z-10">
          <a routerLink="/">
            <img src="assets/images/dataway_white-logo.png" alt="Dataway" class="h-10 w-auto">
          </a>
        </div>
        
        <!-- Mobile Hamburger Button -->
        <div class="absolute top-8 right-8 z-20 md:hidden">
          <button (click)="isMenuOpen.set(true)" class="text-white hover:text-gray-200 focus:outline-none p-2">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Right Side (Content) -->
      <div class="w-full md:w-[60%] lg:w-[55%] bg-white flex flex-col relative px-8 md:px-16 lg:px-24 py-12">
        
        <!-- Desktop Navigation Menu -->
        <div class="flex justify-end items-center mb-24 hidden sm:flex space-x-8">
          <a routerLink="/" class="text-sm font-semibold text-dark hover:text-accent transition-colors">Главная</a>
          <a routerLink="/about" class="text-sm font-semibold text-dark hover:text-accent transition-colors">О компании</a>
          <a routerLink="/news" class="text-sm font-semibold text-dark hover:text-accent transition-colors">Новости</a>
          <a routerLink="/contacts" class="text-sm font-semibold text-dark hover:text-accent transition-colors">Контакты</a>
        </div>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col justify-center max-w-3xl w-full mx-auto">
          
          <!-- Top Row: Title & Text -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24 reveal">
            <div>
              <h1 class="text-5xl lg:text-6xl font-semibold text-dark tracking-tight">Контакты</h1>
            </div>
            <div class="flex items-center">
              <p class="text-sm text-gray-500 font-medium leading-relaxed">
                Готовы ответить на ваши вопросы, подобрать оптимальное решение и обсудить детали вашего проекта. Оставьте заявку — мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          </div>

          <!-- Bottom Row: Info & Form -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 reveal delay-100">
            
            <!-- Info Column -->
            <div class="flex flex-col">
              <h3 class="text-xl font-medium text-dark mb-10">Контактная информация</h3>
              
              <div class="text-sm text-dark font-medium space-y-1 mb-8">
                <p>Понедельник-Суббота</p>
                <p class="text-gray-500">9:00 am - 6 pm</p>
              </div>
              
              <div class="text-sm text-dark font-medium space-y-1 mb-12">
                <p>info&#64;dataway.com</p>
                <p>123-456-789</p>
                <p>123-456-789</p>
              </div>
              
              <!-- Social Icons -->
              <div class="flex space-x-6">
                <!-- Using invert to turn white icons black -->
                <a href="#" class="w-6 h-6 hover:scale-110 transition-transform cursor-pointer">
                  <img src="assets/images/linkedin_white.png" alt="LinkedIn" class="w-full h-full object-contain invert">
                </a>
                <a href="#" class="w-6 h-6 hover:scale-110 transition-transform cursor-pointer">
                  <img src="assets/images/telegram_white.png" alt="Telegram" class="w-full h-full object-contain invert">
                </a>
                <a href="#" class="w-6 h-6 hover:scale-110 transition-transform cursor-pointer">
                  <img src="assets/images/whatsapp_white.png" alt="WhatsApp" class="w-full h-full object-contain invert">
                </a>
              </div>
            </div>

            <!-- Form Column -->
            <div class="flex flex-col">
              <h3 class="text-xl font-medium text-dark mb-10">Обратная связь</h3>
              
              <form class="flex flex-col space-y-8" (submit)="$event.preventDefault()">
                <div>
                  <input type="text" placeholder="Имя" class="w-full border-b border-gray-300 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-accent transition-colors bg-transparent">
                </div>
                <div>
                  <input type="text" placeholder="Номер телефона" class="w-full border-b border-gray-300 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-accent transition-colors bg-transparent">
                </div>
                <div>
                  <input type="text" placeholder="Ваша компания" class="w-full border-b border-gray-300 py-2 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-accent transition-colors bg-transparent">
                </div>
                
                <div class="pt-6">
                  <button type="submit" class="group flex items-center text-sm font-semibold text-accent hover:text-red-600 transition-colors cursor-pointer focus:outline-none">
                    <div class="w-10 h-10 rounded-full border border-accent flex items-center justify-center mr-4 group-hover:border-red-600 transition-colors">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    Заказать консультацию
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
      
      <!-- Mobile Menu Sidebar -->
      @if(isMenuOpen()) {
        <div class="fixed inset-0 z-[100] md:hidden flex justify-end">
          <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" (click)="isMenuOpen.set(false)"></div>
          <div class="relative bg-white w-[85%] max-w-sm h-full flex flex-col shadow-2xl animate-fade-in">
            <div class="flex justify-end items-center h-20 px-6">
              <button (click)="isMenuOpen.set(false)" class="text-dark hover:text-accent transition-colors focus:outline-none p-2">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-col items-center pt-8 space-y-8">
              <a routerLink="/" (click)="isMenuOpen.set(false)" class="text-2xl font-medium text-dark hover:text-accent transition-colors">Главная</a>
              <a routerLink="/about" (click)="isMenuOpen.set(false)" class="text-2xl font-medium text-dark hover:text-accent transition-colors">О компании</a>
              <a routerLink="/news" (click)="isMenuOpen.set(false)" class="text-2xl font-medium text-dark hover:text-accent transition-colors">Новости</a>
              <a routerLink="/contacts" (click)="isMenuOpen.set(false)" class="text-2xl font-medium text-dark hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class ContactsComponent implements AfterViewInit {
  isMenuOpen = signal(false);

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el: Element) => observer.observe(el));
  }
}

