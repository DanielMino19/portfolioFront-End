import { Component, QueryList, ViewChildren, ElementRef, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SkillsServService } from 'src/app/services/skills-serv.service';

@Component({
  selector: 'app-skills-frontend',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsFrontendComponent implements OnInit {
  skills: any[] = [];
  newSkill = {
    title: '',
    icono: ''
  };
  isEditing: boolean = false;
  selectedSkill: any;
  //  acordion skills
 @ViewChildren('test') tests!: QueryList<ElementRef>;
 
 constructor(private elementRef: ElementRef,
   private skillsService: SkillsServService,
    public authService: AuthService){}

    //open and close skills
    showSkillsContent = false;
    toggleSkillsContent() {
      this.showSkillsContent = !this.showSkillsContent;
    }


  ngOnInit(): void {
    this.getSkills();
   
  }



  // Obtener todos los skills
  getSkills(): void {
    this.skillsService.getSkills()
      .subscribe((data: any) => {
        this.skills = data;
      });
  }

  // Crear un nuevo skill
  createSkill(): void {
    this.skillsService.createSkill(this.newSkill)
      .subscribe((data: any) => {
        console.log(data);
        this.getSkills();
        this.newSkill = {
          title: '',
          icono: ''
        };
      });
  }

  // Cancelar la edición de un skill existente
cancelEdit(): void {
  this.isEditing = false;
  this.selectedSkill = null;
}

// Editar un skill existente
editSkill(id: string): void {
  this.isEditing = true;
  this.selectedSkill = this.skills.find(skill => skill.id === id);
}
  
  // Actualizar un skill existente
updateSkill(): void {
  if (this.selectedSkill) {
    this.skillsService.updateSkill(this.selectedSkill.id, this.selectedSkill)
      .subscribe(updatedSkill => {
        console.log('Skill actualizado:', updatedSkill);
        this.isEditing = false;
        this.selectedSkill = null;
      });
  }
}

  // Borrar un skill existente
  deleteSkill(id: string): void {
    this.skillsService.deleteSkill(id)
      .subscribe((data: any) => {
        console.log(data);
        this.getSkills();
      });
  }


 

}
