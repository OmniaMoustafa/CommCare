import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientItemSmallComponent } from './patient-item-small.component';

describe('PatientItemSmallComponent', () => {
  let component: PatientItemSmallComponent;
  let fixture: ComponentFixture<PatientItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
