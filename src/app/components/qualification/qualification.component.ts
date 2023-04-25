import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { QeducationService } from 'src/app/services/qeducation.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit{
    isDesktop:boolean
    qeducation: any[] = [];
    newQeducation={
      title: "",
      subtitle: "",
      date: ""
    }
    isEditing:boolean = false;
    selectedQeducation:any;
   

    
    constructor(private qeducationService: QeducationService, public authService: AuthService){
      this.isDesktop = window.innerWidth > 768;
    }


    ngOnInit(): void {
      this.getAllQEducation();
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

    
  // Obtener todos los qeducation
  getAllQEducation(): void {
    this.qeducationService.getAllQEducation()
      .subscribe((data: any) => {
        this.qeducation = data;
      });
  }

  // Crear un nuevo qeducation
  createQEducation(): void {
    this.qeducationService.createQEducation(this.newQeducation)
      .subscribe((data: any) => {
        console.log(data);
        this.getAllQEducation();
        this.newQeducation = {
          title: '',
          subtitle: '',
          date: ''
        };
      });
  }

  // Cancelar la edición de un qeducation existente
cancelEdit(): void {
  this.isEditing = false;
  this.selectedQeducation = null;
}

// Editar un qeducation existente
editQEducation(id: string): void {
  this.isEditing = true;
  this.selectedQeducation = this.qeducation.find(qeducation => qeducation.id === id);
}
  
  // Actualizar un qeducation existente
updateQEducation(): void {
  if (this.selectedQeducation) {
    this.qeducationService.updateQEducation(this.selectedQeducation.id, this.selectedQeducation)
      .subscribe(updatedQEducation => {
        console.log('Skill actualizado:', updatedQEducation);
        this.isEditing = false;
        this.selectedQeducation = null;
      });
  }
}

  // Borrar un qeducation existente
  deleteQEducation(id: string): void {
    this.qeducationService.deleteQEducation(id)
      .subscribe((data: any) => {
        console.log(data);
        this.getAllQEducation();
      });
  }

}
