import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MeserviceService } from 'src/app/services/meservice.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  service: any[] = [];
  newService={
    icono: '',
    title: '',
    parrafo1: '',
    parrafo2: '',
    parrafo3: ''
  }
  isEditing:boolean = false;
  selectedService: any;
  modalCloses: NodeListOf<HTMLElement> | undefined;
  modalBtn: NodeListOf<HTMLElement> | undefined;

 
  constructor(private meserviceService: MeserviceService, public authService:AuthService){
   
  }
 


  ngOnInit(): void {
    this.getAllService()
  }

    ngAfterViewInit() {
      const modalViews = document.querySelectorAll('.services__modal');
      const modalBtns = document.querySelectorAll<HTMLElement>('.services__button');
      const modalCloses = document.querySelectorAll<HTMLElement>('.services__modal--close');
  
      // Modal 
      function modal(modalClick: any): void {
        if(modalViews[modalClick]){
          modalViews[modalClick].classList.add('active-modal');
        }
      }
    
      modalBtns.forEach((modalBtn)=>{
        modalBtn.addEventListener('click',()=>{
          const modalId = modalBtn.dataset["modalId"];
          modal(modalId);
        });
      });
  
      modalCloses.forEach((modalClose)=>{
        modalClose.addEventListener('click', ()=>{
          modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal');
          });
        });
      });

      this.modalBtn = modalBtns;
      this.modalCloses = modalCloses;

    }
    modal(modalId: number){
      // mostrar el modal correspondiente
      const modalViews = document.querySelectorAll('.services__modal');
      modalViews[modalId].classList.add('active-modal');
    }  

    closeModal(){
      // ocultar todos los modales
      const modalViews = document.querySelectorAll('.services__modal');
      modalViews.forEach((modalView)=>{
        modalView.classList.remove('active-modal');
      });
    }
    
  // Obtener todos los service
  getAllService(): void {
    this.meserviceService.getAllService()
      .subscribe((data: any) => {
        this.service = data;
   
      });
             
            
  }

  // Crear un nuevo service
  createService(): void {
    this.meserviceService.createService(this.newService)
      .subscribe((data: any) => {
        console.log(data);
        this.meserviceService.getAllService();
        this.newService = {
          icono: '',
          title: '',
          parrafo1: '',
          parrafo2: '',
          parrafo3: ''
        };
      });
  }

  // Cancelar la edición de un service existente
  cancelEdit(): void {
    this.isEditing = false;
    this.selectedService = {};
  }

  // Editar un service existente
  editService(id: string): void {
    this.meserviceService.getService(id).subscribe(data => {
      this.selectedService = data;
      this.isEditing = true;
    });
  }
  
  // Actualizar un service existente
  updateService(): void {
   
      this.meserviceService.updateService(this.selectedService.id, this.selectedService)
        .subscribe(() => {
          const index = this.service.findIndex(service => service.id === this.selectedService.id);
          this.service[index] = this.selectedService;
         
          
          this.selectedService = {};
          this.isEditing = false;
        });
    
    
  }

  // Borrar un service existente
  deleteService(id: string): void {
    this.meserviceService.deleteService(id)
      .subscribe((data: any) => {
        console.log(data);
        this.getAllService();
      });
  }


}

