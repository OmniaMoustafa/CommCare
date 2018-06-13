import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListingsComponent } from './patient-listings.component';

describe('PatientListingsComponent', () => {
  let component: PatientListingsComponent;
  let fixture: ComponentFixture<PatientListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
