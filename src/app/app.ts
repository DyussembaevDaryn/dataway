import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  isModalOpen = signal(false);
  currentTheme: 'dark' | 'light' = 'dark';
  private routerSub: any;

  isContactsPage = false;

  constructor(private router: Router) {
    (window as any).appComponentRef = this;
  }

  ngOnInit() {
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isContactsPage = event.urlAfterRedirects.includes('contacts');
      // If we're on /about, use light theme, else dark
      this.currentTheme = event.urlAfterRedirects.includes('about') ? 'light' : 'dark';
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
    (window as any).appComponentRef = null;
  }
}
