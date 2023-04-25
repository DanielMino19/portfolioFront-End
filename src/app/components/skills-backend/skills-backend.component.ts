import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsBackendServService } from 'src/app/services/skills-backend-serv.service';


@Component({
  selector: 'app-skills-backend',
  templateUrl: './skills-backend.component.html',
  styleUrls: ['./skills-backend.component.css']
})
export class SkillsBackendComponent implements OnInit {
  skillsBackend: any[] = [];
  newSkillBackend = {
    title: '',
    icono: ''
  };
  isEditing: boolean = false;
  selectedSkillBackend: any;
  constructor(private elementRef: ElementRef, public authService: AuthService,
    private skillsBackendServService:SkillsBackendServService){}

  ngOnInit(): void {
    this.getSkillsbackend()
  }
   //open and close skills
  showSkillsContent = false;
  toggleSkillsContent() {
    this.showSkillsContent = !this.showSkillsContent;
  }

  //Obtener todos los skillsBackend
  getSkillsbackend():void{
    this.skillsBackendServService.getSkillsBackend().subscribe((data: any) => {
      this.skillsBackend = data;
    });
  }

  // Crear un nuevo skillBackend
  createSkillBackend(): void {
    this.skillsBackendServService.createSkillBackend(this.newSkillBackend)
    .subscribe((data:any) => {
      // Agregar el nuevo skillBackend al arreglo
      console.log(data);
      this.skillsBackendServService.getSkillsBackend();

      // Limpiar el formulario
      this.newSkillBackend = {
        title: '',
        icono: ''
      };
    });
  }

 
  // Borrar un skill existenteBackend
  deleteSkillBackend(id: string): void {
    this.skillsBackendServService.deleteSkillBackend(id).subscribe(() => {
      // Remover el skillBackend del arreglo
      this.skillsBackend = this.skillsBackend.filter(skill => skill.id !== id);
    });
  }

  // Editar un skill existenteBackend
  editSkillBackend(id: string): void {
    // Obtener el skillBackend por su id
    this.skillsBackendServService.getSkillByIdBackend(id).subscribe(data => {
      this.selectedSkillBackend = data;
      this.isEditing = true;
    });
  }

  // Actualizar un skillBackend existente
  updateSkillBackend(): void {
    this.skillsBackendServService.updateSkillBackend(this.selectedSkillBackend.id, this.selectedSkillBackend).subscribe(() => {
      // Actualizar el skillBackend en el arreglo
      const index = this.skillsBackend.findIndex(skill => skill.id === this.selectedSkillBackend.id);
      this.skillsBackend[index] = this.selectedSkillBackend;

      // Limpiar el formulario
      this.selectedSkillBackend = {};
      this.isEditing = false;
    });
  }

  // Cancelar la edición de un skillBackend
  cancelEditBackend(): void {
    this.selectedSkillBackend = {};
    this.isEditing = false;
  }


}
