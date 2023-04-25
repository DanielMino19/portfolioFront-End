import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { QworkService } from 'src/app/services/qwork.service';

@Component({
  selector: 'app-qualificationwork',
  templateUrl: './qualificationwork.component.html',
  styleUrls: ['./qualificationwork.component.css']
})
export class QualificationworkComponent implements OnInit{
  isDesktop:boolean
  qwork: any[] = [];
  newQWork={
    title: "",
    subtitle: "",
    date: ""
  }
  isEditing:boolean = false;
  selectedQwork:any;
 
  constructor(private qworkService: QworkService, public authService: AuthService){
    this.isDesktop =  window.innerWidth > 768;
  }

 
  ngOnInit(): void {
    this.getAllQWork();

  }
    
  // Obtener todos los qeducation
  getAllQWork(): void {
    this.qworkService.getAllQWork()
      .subscribe((data: any) => {
        this.qwork = data;
      });
  }

  // Crear un nuevo qeducation
  createQWork(): void {
    this.qworkService.createQWork(this.newQWork)
      .subscribe((data: any) => {
        console.log(data);
        this.getAllQWork();
        this.newQWork = {
          title: '',
          subtitle: '',
          date: ''
        };
      });
  }

  // Cancelar la edición de un qeducation existente
cancelEdit(): void {
  this.isEditing = false;
  this.selectedQwork = null;
}

// Editar un qeducation existente
editQWork(id: string): void {
  this.isEditing = true;
  this.selectedQwork = this.qwork.find(qwork => qwork.id === id);
}
  
  // Actualizar un qeducation existente
updateQWork(): void {
  if (this.selectedQwork) {
    this.qworkService.updateQWork(this.selectedQwork.id, this.selectedQwork)
      .subscribe(updatedQWork => {
        console.log('QWork actualizado:', updatedQWork);
        this.isEditing = false;
        this.selectedQwork = null;
      });
  }
}

  // Borrar un qeducation existente
  deleteQWork(id: string): void {
    this.qworkService.deleteQWork(id)
      .subscribe((data: any) => {
        console.log(data);
        this.getAllQWork();
      });
  }
}
