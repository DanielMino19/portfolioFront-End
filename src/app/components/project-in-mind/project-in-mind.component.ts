import { Component } from '@angular/core';

@Component({
  selector: 'app-project-in-mind',
  templateUrl: './project-in-mind.component.html',
  styleUrls: ['./project-in-mind.component.css']
})
export class ProjectInMindComponent {
  scrollToSection(event: any) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const anchorName = href.split("#")[1];
    const section = document.querySelector(`#${anchorName}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
