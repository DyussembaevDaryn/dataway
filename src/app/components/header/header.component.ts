import { Component, input, signal, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <nav [class]="'fixed w-full z-50 transition-all duration-300 ' + (isWhiteTheme() ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent py-4')">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex-shrink-0 flex items-center">
            <a routerLink="/" class="cursor-pointer">
              @if(isWhiteTheme()) {
                <img class="h-10 w-auto" src="assets/images/dataway_logo.png" alt="Dataway"> 
              } @else {
                <img class="h-10 w-auto" src="assets/images/dataway_white-logo.png" alt="Dataway"> 
              }
            </a>
          </div>
          <div class="hidden md:flex space-x-8">
            <a routerLink="/" [class]="'font-semibold transition-colors ' + (isWhiteTheme() ? 'text-dark hover:text-accent' : 'text-white hover:text-gray-200')">Главная</a>
            <a routerLink="/about" [class]="'font-semibold transition-colors ' + (isWhiteTheme() ? 'text-dark hover:text-accent' : 'text-white hover:text-gray-200')">О компании</a>
            <a routerLink="/news" [class]="'font-semibold transition-colors ' + (isWhiteTheme() ? 'text-dark hover:text-accent' : 'text-white hover:text-gray-200')">Новости</a>
            <a routerLink="/contacts" [class]="'font-semibold transition-colors ' + (isWhiteTheme() ? 'text-dark hover:text-accent' : 'text-white hover:text-gray-200')">Контакты</a>
          </div>
          <div class="md:hidden flex items-center">
            <button (click)="isMenuOpen.set(!isMenuOpen())" [class]="'focus:outline-none cursor-pointer transition-colors ' + (isWhiteTheme() ? 'text-dark hover:text-accent' : 'text-white hover:text-gray-200')">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                @if(!isMenuOpen()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                }
                @if(isMenuOpen()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

    </nav>
    
    <!-- Mobile Menu -->
    @if(isMenuOpen()) {
      <div class="fixed inset-0 z-[100] md:hidden flex justify-end">
        
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" (click)="isMenuOpen.set(false)"></div>
        
        <div class="relative bg-white w-[85%] max-w-sm h-full flex flex-col shadow-2xl animate-fade-in">
          <!-- Top bar inside menu -->
          <div class="flex justify-end items-center h-20 px-6">
            <button (click)="isMenuOpen.set(false)" class="text-dark hover:text-accent transition-colors focus:outline-none p-2">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Navigation Links -->
          <div class="flex flex-col items-center pt-8 space-y-8">
            <a routerLink="/" (click)="isMenuOpen.set(false)" class="text-2xl font-medium text-dark hover:text-accent transition-colors">Главная</a>
            <a routerLink="/about" (click)="isMenuOpen.set(false)" class="text-2xl font-medium text-dark hover:text-accent transition-colors">О компании</a>
            <a routerLink="/news" (click)="isMenuOpen.set(false)" class="text-2xl font-medium text-dark hover:text-accent transition-colors">Новости</a>
            <a routerLink="/contacts" (click)="isMenuOpen.set(false)" class="text-2xl font-medium text-dark hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>

      </div>
    }
  `
})
export class HeaderComponent implements OnInit {
  theme = input<'dark' | 'light'>('dark');
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  isWhiteTheme(): boolean {
    return this.theme() === 'light' || this.isScrolled() || this.isMenuOpen();
  }
}
