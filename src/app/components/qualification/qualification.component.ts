import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit{

    ngOnInit(): void {
      const tabs = document.querySelectorAll('[data-target]');
      const tabContents = document.querySelectorAll('[data-content]');
  
      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const dataTarget = tab.getAttribute('data-target');
          if (dataTarget) {
            const target = document.querySelector<HTMLElement>(dataTarget);
  
            // Remueve la clase 'qualification__active' de todos los elementos con atributo [data-content]
            tabContents.forEach((tabContent) => {
              tabContent.classList.remove('qualification__active');
            });
  
            // Agrega la clase 'qualification__active' al elemento correspondiente
            target?.classList.add('qualification__active');
  
            // Remueve la clase 'qualification__active' de todos los elementos con atributo [data-target]
            tabs.forEach((tab) => {
              tab.classList.remove('qualification__active');
            });
  
            // Agrega la clase 'qualification__active' al elemento clickeado
            tab.classList.add('qualification__active');
          } else {
            throw new Error('El valor de data-target no puede ser nulo');
          }
        });
      });
    }
}
