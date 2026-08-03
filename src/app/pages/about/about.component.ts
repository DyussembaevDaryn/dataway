import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <!-- Hero section -->
    <section class="pt-32 pb-20 bg-[#F7F7F7]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl reveal">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-normal text-dark tracking-tight leading-tight mb-8">
            Создаем надежную IT-инфраструктуру для бизнеса
          </h1>
          <p class="text-lg text-gray-500 max-w-2xl font-medium">
            Dataway — поставщик корпоративного IT-оборудования и инфраструктурных решений. Мы помогаем компаниям строить современные, масштабируемые и безопасные IT-системы.
          </p>
        </div>
      </div>
    </section>

    <!-- Partners section -->
    <section class="py-24 bg-[#FFFFFF]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="reveal delay-100 flex flex-col lg:flex-row gap-12">
          
          <!-- Title on the left -->
          <div class="w-full lg:w-1/4 pt-4">
            <h2 class="text-3xl md:text-4xl font-normal text-dark tracking-tight">Наши партнеры</h2>
          </div>

          <!-- Cards on the right -->
          <div class="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div class="bg-[#FFFFFF] border border-gray-300 rounded p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div class="h-20 mb-8 flex items-start justify-start">
                 <img src="assets/images/hp.png" class="h-16 w-auto object-contain" alt="HP">
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-medium text-dark mb-4 leading-snug">Корпоративные серверные<br>решения и системы хранения<br>данных</h3>
                <p class="text-[13px] text-dark mb-2 font-normal">Основные решения</p>
                <ul class="text-[13px] text-dark space-y-1 font-normal" style="list-style-type: disc; padding-left: 1.25rem;">
                  <li>Rack и Tower серверы</li>
                  <li>Blade-системы</li>
                  <li>Системы хранения данных</li>
                  <li>Решения для виртуализации</li>
                </ul>
              </div>
            </div>

            <div class="bg-[#FFFFFF] border border-gray-300 rounded p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div class="h-20 mb-8 flex items-start justify-start">
                 <img src="assets/images/sangfor.png" class="h-12 w-auto object-contain" alt="Sangfor">
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-medium text-dark mb-4 leading-snug">Современная сетевая<br>инфраструктура</h3>
                <p class="text-[13px] text-dark mb-2 font-normal">Основные решения</p>
                <ul class="text-[13px] text-dark space-y-1 font-normal" style="list-style-type: disc; padding-left: 1.25rem;">
                  <li>Коммутаторы L2/L3</li>
                  <li>Маршрутизаторы</li>
                  <li>Wi-Fi</li>
                  <li>Решения для дата-центров</li>
                </ul>
              </div>
            </div>

            <div class="bg-[#FFFFFF] border border-gray-300 rounded p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div class="h-20 mb-8 flex items-start justify-start">
                 <img src="assets/images/NZS.png" class="h-12 w-auto object-contain" alt="NZS">
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-medium text-dark mb-4 leading-snug">Гиперконвергентная<br>инфраструктура нового<br>поколения</h3>
                <p class="text-[13px] text-dark mb-2 font-normal">Основные решения</p>
                <ul class="text-[13px] text-dark space-y-1 font-normal" style="list-style-type: disc; padding-left: 1.25rem;">
                  <li>HCI</li>
                  <li>Виртуализация</li>
                  <li>Backup</li>
                  <li>Облачная инфраструктура</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="py-24 bg-[#F7F7F7] text-center">
      <div class="flex flex-col items-center gap-7 max-w-3xl mx-auto px-4 reveal">
        <h2 class="text-3xl md:text-4xl font-normal text-dark mb-10 leading-snug">
          Начните модернизацию IT-инфраструктуры уже сегодня
        </h2>
        <button (click)="openModal()" class="w-[263px] px-8 py-4 bg-white border border-gray-300 text-sm font-semibold text-dark rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all cursor-pointer shadow-sm">
          Получить консультацию
        </button>
      </div>
    </section>
  `
})
export class AboutComponent implements AfterViewInit {
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

  openModal() {
    const appComponent = (window as any).appComponentRef;
    if (appComponent) appComponent.isModalOpen.set(true);
  }
}
