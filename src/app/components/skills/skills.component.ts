import { Component, QueryList, ViewChildren, ElementRef} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
 //  acordion skills
 @ViewChildren('test') tests!: QueryList<ElementRef>;
 constructor(private elementRef: ElementRef){}
  ngAfterViewInit() {
    this.tests.forEach((el) => {
      el.nativeElement.addEventListener('click', () => {
        if (this.tests && el.nativeElement) {
          const classList = el.nativeElement.classList;
          classList.contains('skills__open')
            ? (classList.remove('skills__open'), classList.add('skills__close'))
            : (classList.remove('skills__close'), classList.add('skills__open'));
        }
      });
    });
  }
}
