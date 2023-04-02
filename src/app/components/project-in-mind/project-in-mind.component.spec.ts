import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInMindComponent } from './project-in-mind.component';

describe('ProjectInMindComponent', () => {
  let component: ProjectInMindComponent;
  let fixture: ComponentFixture<ProjectInMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectInMindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
