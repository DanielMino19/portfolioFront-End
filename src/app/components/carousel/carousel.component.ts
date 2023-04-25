import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  swipper: any[] = [];
  newSwipper = {
    img: '',
    linkweb:'',
    title: '',
    parrafo: ''
  };
  
  isEditing: boolean = false;
  selectedSwipper: any;

  constructor(private carouselService:CarouselService, public authService:AuthService){}

  ngOnInit(): void {
      this.getAllSwipper();
  }

  //Obtener todos los swipper
  getAllSwipper():void{
    this.carouselService.getAllSwipper().subscribe((data: any) => {
      this.swipper = data;
    });
  }

  // Crear un nuevo swipper
  createSwipper(): void {
    this.carouselService.createSwipper(this.newSwipper)
    .subscribe((data:any) => {
      // Agregar el nuevo swipper al arreglo
      console.log(data);
      this.carouselService.getAllSwipper();

      // Limpiar el formulario
      this.newSwipper = {
        img: '',
        linkweb:'',
        title: '',
        parrafo: ''
      };
    });
  }

 
  // Borrar un swipper existente
  deleteSwipper(id: string): void {
    this.carouselService.deleteSwipper(id).subscribe(() => {
      // Remover el swipper del arreglo
      this.swipper = this.swipper.filter(swip => swip.id !== id);
    });
  }

  // Editar un swipper existente
  editSwipper(id: string): void {
    // Obtener el swipper por su id
    this.carouselService.getSwipper(id).subscribe(data => {
      this.selectedSwipper = data;
      this.isEditing = true;
    });
  }

  // Actualizar un swipper existente
  updateSwipper(): void {
    this.carouselService.updateSwipper(this.selectedSwipper.id, this.selectedSwipper).subscribe(() => {
      // Actualizar el swipper en el arreglo
      const index = this.swipper.findIndex(swip => swip.id === this.selectedSwipper.id);
      this.swipper[index] = this.selectedSwipper;

      // Limpiar el formulario
      this.selectedSwipper = {};
      this.isEditing = false;
    });
  }

  // Cancelar la edición de un swipper
  cancelSwipper(): void {
    this.selectedSwipper = {};
    this.isEditing = false;
  }


}
