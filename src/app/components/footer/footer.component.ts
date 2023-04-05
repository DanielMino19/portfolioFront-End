import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  constructor(){}
 
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const scrollUp = document.getElementById('scroll-up');
      if (window.scrollY >= 500) {
        scrollUp?.classList.add('show-scroll');
      } else {
        scrollUp?.classList.remove('show-scroll');
      }
    });
  }
  scrollToSection(event: any) {
    const target = event.target;
    if (target instanceof Element) {
      const href = target.getAttribute('href');
      if (!href || href === '#') {
        event.preventDefault();
        window.scrollTo(0, 0)
      } else {
        const section = document.querySelector(href) ?? '';
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          event.preventDefault();
        }
      }
    }
  }
}
