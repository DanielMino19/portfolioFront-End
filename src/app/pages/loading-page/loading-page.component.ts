import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { LoadingServiceService } from 'src/app/services/loading-service.service';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit,AfterViewInit {
  isDarkTheme = false;
 
  constructor(private loadingService: LoadingServiceService, private router: Router) { }
  ngOnInit(): void {
    this.isDarkTheme;
    // Obtiene el observable del servicio LoadingService
    

    this.loadingService.doRequests().subscribe(() => {
      // Aquí se ejecuta cuando todas las solicitudes se han completado
      // Redirige a la página de inicio
      this.router.navigate(['/home']);
    });

      
  }
  


  
  ngAfterViewInit(): void {
 
    this.darktheme();
   
  }

  darktheme() {
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
}
}
