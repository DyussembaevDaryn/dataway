
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
  <footer class="py-12" [ngClass]="theme() === 'light' ? 'bg-white' : 'bg-[#1A1A1A]'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="flex space-x-8 max-md:mb-6">
        <a routerLink="/about" class="text-sm font-semibold hover:text-accent transition-colors" [ngClass]="theme() === 'light' ? 'text-gray-600' : 'text-white'">О компании</a>
        <a routerLink="/#contact" class="text-sm font-semibold hover:text-accent transition-colors" [ngClass]="theme() === 'light' ? 'text-gray-600' : 'text-white'">Контакты</a>
        <a routerLink="/#contact" class="text-sm font-semibold hover:text-accent transition-colors" [ngClass]="theme() === 'light' ? 'text-gray-600' : 'text-white'">Связаться с нами</a>
      </div>

      <!-- Social Icons Footer -->
      <div class="flex items-center space-x-6 max-md:mb-6">
        <a href="#" class="w-6 h-6 hover:scale-110 transition-transform opacity-70 hover:opacity-100 cursor-pointer">
          <img src="assets/images/linkedin_white.png" alt="LinkedIn" class="w-full h-full object-contain" [class.invert]="theme() === 'light'">
        </a>
        <a href="#" class="w-6 h-6 hover:scale-110 transition-transform opacity-70 hover:opacity-100 cursor-pointer">
          <img src="assets/images/telegram_white.png" alt="Telegram" class="w-full h-full object-contain" [class.invert]="theme() === 'light'">
        </a>
        <a href="#" class="w-6 h-6 hover:scale-110 transition-transform opacity-70 hover:opacity-100 cursor-pointer">
          <img src="assets/images/whatsapp_white.png" alt="WhatsApp" class="w-full h-full object-contain" [class.invert]="theme() === 'light'">
        </a>
      </div>
    </div>
  </footer>
  `
})
export class FooterComponent {
  theme = input<'dark' | 'light'>('dark');
}
