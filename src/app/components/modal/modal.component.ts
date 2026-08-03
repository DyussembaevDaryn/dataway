
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
  @if(isOpen()) {
    <div class="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-0">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-black/20 transition-opacity" (click)="close.emit()"></div>

      <!-- Modal Panel -->
      <div class="relative bg-white/10 border border-white/20 rounded-[14px] shadow-2xl w-full max-w-[420px] p-8 sm:px-10 sm:py-12" style="backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);">
        <!-- Close button -->
        <button (click)="close.emit()" class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors focus:outline-none cursor-pointer">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 class="text-2xl font-normal text-white mb-3">Обсудим ваш проект</h3>
        <p class="text-sm text-gray-100 mb-8 leading-relaxed font-medium">
          Оставьте свои контактные данные, и мы подготовим решение с учетом требований вашего бизнеса.
        </p>

        <form class="space-y-4">
          <div>
            <input type="text" placeholder="Ваше имя" class="w-full px-5 py-3.5 bg-transparent border border-white/40 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
          </div>
          <div>
            <input type="tel" placeholder="Номер телефона" class="w-full px-5 py-3.5 bg-transparent border border-white/40 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
          </div>
          <div>
            <input type="text" placeholder="Ваша компания" class="w-full px-5 py-3.5 bg-transparent border border-white/40 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
          </div>

          <div class="pt-4">
            <button type="submit" class="w-full bg-accent hover:bg-[#E54D20] text-white font-semibold py-4 px-6 rounded-md transition-colors shadow-lg flex justify-center items-center cursor-pointer">
              Заказать консультацию
            </button>
          </div>
        </form>
      </div>
    </div>
  }
  `
})
export class ModalComponent {
  isOpen = input<boolean>(false);
  close = output<void>();
}
