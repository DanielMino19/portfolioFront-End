import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, AfterViewInit{
 
  currentRoute: string;
  hueColor = 'hsl(000, 00%, 00%)';

  constructor(private router: Router, public authService: AuthService){
    this.currentRoute = this.router.url;

  }


  ngOnInit(): void {
    this.darktheme();
    
  }

  cambiarHueColor(color: string) {
    const regex = /(\d+)/g;
    const matches = color.match(regex);
    const hue = Number(matches![0]);
    document.documentElement.style.setProperty('--hue-color', hue.toString());
  }


  logout(){
    sessionStorage.removeItem('token')
    this.router.navigate([''])
    location.reload();
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  
    const sections = document.querySelectorAll('section[id]');
  
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 50;
      const sectionHeight = (section as HTMLElement).clientHeight;
      const id = (section as HTMLElement).getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`) as HTMLElement | null;
  
      if (navLink) {
        if (window.pageYOffset >= sectionTop && window.pageYOffset < (sectionTop + sectionHeight)) {
          navLink.classList.add('active-linkk');
        } else {
          navLink.classList.remove('active-linkk');
        }
      }
    });
  }
  
  scrollToSection(event: any) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const anchorName = href.split("#")[1];
    const section = document.querySelector(`#${anchorName}`);
    section?.scrollIntoView({ behavior: 'smooth' });
}

isDarkTheme = false;

ngAfterViewInit(): void {
  this.darktheme();
 
}

darktheme() {
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';

  // previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme');

  // we obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

  // we validate if the user previusly chose a topic
  if (selectedTheme) {
  // if the validation is fulfilled, we ask what the issue was to know if we activated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  }else {
    // add dark-theme class to body element if user did not select a theme previously
    document.body.classList.add(darkTheme);
  }

  // Set the initial theme
  this.isDarkTheme = getCurrentTheme() === 'dark';

  // Activate / desactivate the theme manually with the button
  themeButton?.addEventListener('click', () => {
    // add or remove the dark theme
    document.body.classList.toggle(darkTheme);
    this.isDarkTheme = !this.isDarkTheme;
    // we save the theme add the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
  });
}

  
}

