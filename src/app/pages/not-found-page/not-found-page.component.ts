import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements AfterViewInit, OnInit {
  isDarkTheme = false;
  constructor(){}

  ngOnInit(): void {
      this.isDarkTheme;
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
