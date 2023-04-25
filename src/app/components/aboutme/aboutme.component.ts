import { Component, OnInit } from '@angular/core';
import { AboutmeServiceService } from 'src/app/services/aboutme-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { TituloParrafoService } from 'src/app/services/titulo-parafo-service.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit{
  titulo: string = '';
  parrafo: string= '';
  editando = false;

   imgSrc: string = "";
   description: string = "";
   experience: number = 0 ;
   projects: number = 0 ;
   companies: number = 0 ;  
   isEditing: boolean = false;

  constructor(private tituloParrafoService: TituloParrafoService, public authService: AuthService, private aboutmeService: AboutmeServiceService) { 

  }

  ngOnInit() {
    this.getTituloParrafo();
    this.getProfileInfo();
  }


  getProfileInfo() {
    this.aboutmeService.geetProfileInfo().subscribe(data => {
      // Asignar los valores devueltos por el servicio a las variables correspondientes
      this.imgSrc = data.imgSrc;
      this.description = data.description;
      this.experience = data.experience;
      this.projects = data.projects;
      this.companies = data.companies;
    });
  }

  updateProfileInfo() {
    const aboutme = {
      imgSrc: this.imgSrc,
      description: this.description,
      experience: this.experience,
      projects: this.projects,
      companies: this.companies
    }
    this.aboutmeService.updateProfileInfo(aboutme).subscribe(data => {
      console.log(data);
    });
  }

  onSave() {
    this.updateProfileInfo();
    this.isEditing = false;
  }
    onEdit() {
      this.isEditing = true;
    }

    onCancel() {
      this.isEditing = false;
      this.getProfileInfo();
    }

  scrollToFooter() {
    const footer = document.querySelector('#footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  }
  



  getTituloParrafo() {
    this.tituloParrafoService.getTituloParrafo().subscribe(tituloParrafo => {
      this.titulo = tituloParrafo.titulo;
      this.parrafo = tituloParrafo.parrafo;
    });
  }

  guardar() {
    const tituloParrafo = { titulo: this.titulo, parrafo: this.parrafo };
    this.tituloParrafoService.updateTituloParrafo(tituloParrafo).subscribe(() => {
      this.editando = false;
    });
  }
  cancelar() {
    this.getTituloParrafo();
    this.editando = false;
  }

  scrollToSection(event: any) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const anchorName = href.split("#")[1];
    const section = document.querySelector(`#${anchorName}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
