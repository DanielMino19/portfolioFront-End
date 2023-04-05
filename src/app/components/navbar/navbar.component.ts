import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
// export class NavbarComponent implements OnInit, AfterViewInit{
//   token: string| null= null;
//   currentRoute: string;


//   constructor(private router: Router){
//     this.currentRoute = this.router.url;

//   }


//   ngOnInit(): void {
//     this.token = sessionStorage.getItem('token');
//   }

//   logout(){
//      sessionStorage.removeItem('token')
//     this.router.navigate(['/home'])
//     location.reload();
//   }

//   isScrolled = false;

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     if (window.pageYOffset > 100) {
//       this.isScrolled = true;
//     } else {
//       this.isScrolled = false;
//     }
  
//     const sections = document.querySelectorAll('section[id]');
  
//     sections.forEach((section) => {
//       const sectionTop = (section as HTMLElement).offsetTop - 50;
//       const sectionHeight = (section as HTMLElement).clientHeight;
//       const id = (section as HTMLElement).getAttribute('id');
//       const navLink = document.querySelector(`.nav-link[href="#${id}"]`) as HTMLElement | null;
  
//       if (navLink) {
//         if (window.pageYOffset >= sectionTop && window.pageYOffset < (sectionTop + sectionHeight)) {
//           navLink.classList.add('active-linkk');
//         } else {
//           navLink.classList.remove('active-linkk');
//         }
//       }
//     });
//   }
  
//   scrollToSection(event: any) {
//     event.preventDefault();
//     const href = event.target.getAttribute('href');
//     const section = document.querySelector(href);
//     section?.scrollIntoView({ behavior: 'smooth' });
//   }

//   ngAfterViewInit(): void {
//     this.darktheme(){
//       const themeButton = document.getElementById('theme-button')
//       const darkTheme = 'dark-theme'
//       const iconTheme = 'bi-brightness-high'
    
//         // previously selected topic (if user selected)
//         const selectedTheme = localStorage.getItem('selected-theme')
//         const selectedIcon = localStorage.getItem('selected-icon')
    
//         // we obtain the current theme that the interface has by validating the dark-theme class
//         const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
//         const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'bi-moon' : 'bi-brightness-high'
    
//         // we validate if the user previusly chose a topic
//         if(selectedTheme){
//           // if the validation is fulfilled, we ask what the issue was to know if we activated
//           document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//           themeButton?.classList[selectedIcon === 'bi-brightness-high' ? 'add' : 'remove'](iconTheme)
//         }
    
//         // Activate / desactivate the theme manually with the button
//         themeButton?.addEventListener('click', ()=>{
//           // add or remove the dark / icon theme
//           document.body.classList.toggle(darkTheme)
//           themeButton.classList.toggle(iconTheme)
//           // we save the theme add the current icon that the user chose
//           localStorage.setItem('selected-theme', getCurrentTheme())
//           localStorage.setItem('selected-icon', getCurrentIcon())
//         })
    
//       } 
//   }
//   // dark light theme
  
// }

export class NavbarComponent implements OnInit, AfterViewInit{
  token: string| null= null;
  currentRoute: string;


  constructor(private router: Router){
    this.currentRoute = this.router.url;

  }


  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');


    
  }

  logout(){
     sessionStorage.removeItem('token')
    this.router.navigate(['/home'])
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

