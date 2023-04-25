import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationworkComponent } from './qualificationwork.component';

describe('QualificationworkComponent', () => {
  let component: QualificationworkComponent;
  let fixture: ComponentFixture<QualificationworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
