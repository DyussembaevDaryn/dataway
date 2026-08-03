import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Image Section -->
    <section class="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('assets/images/news4.png');"></div>
      
      <!-- Overlay to ensure header visibility -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
    </section>

    <!-- Content Section -->
    <section class="py-20 bg-white min-h-[500px]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-dark mb-6 leading-tight tracking-tight">
          Dataway расширяет партнерство с HP
        </h1>
        
        <p class="text-sm text-gray-400 font-medium mb-16">
          20 Июня 2026
        </p>
        
        <div class="prose prose-lg max-w-none text-dark space-y-6 text-base lg:text-lg font-medium leading-relaxed">
          <p>
            Компания Dataway объявляет о расширении сотрудничества с HP в области поставок корпоративного IT-оборудования. Новое партнерство позволит предложить клиентам более широкий выбор серверных платформ, систем хранения данных и решений для построения современной IT-инфраструктуры.
          </p>
          
          <p>
            Расширение партнерской программы направлено на повышение доступности передовых технологий для корпоративных заказчиков. Благодаря сотрудничеству с HP компания Dataway сможет предлагать комплексные решения, учитывающие требования к производительности, масштабируемости и надежности.
          </p>
          
          <p>
            В рамках партнерства клиенты получают доступ к современным серверным платформам, системам хранения данных и инфраструктурным решениям, которые подходят как для модернизации существующих IT-систем, так и для реализации новых проектов.
          </p>
          
          <p>
            «Наша цель — предоставлять бизнесу технологии, которые помогают создавать стабильную и эффективную IT-инфраструктуру. Расширение сотрудничества с HP — еще один шаг в развитии нашего портфеля решений», — отметили в компании Dataway.
          </p>
          
          <p>
            Dataway продолжает развивать партнерскую экосистему и расширять спектр решений, чтобы помогать клиентам реализовывать проекты любой сложности — от поставки оборудования до внедрения и сопровождения корпоративной инфраструктуры.
          </p>
        </div>
        
      </div>
    </section>
  `
})
export class NewsDetailComponent implements AfterViewInit, OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
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
