import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListingsComponent } from './doctor-listings.component';

describe('DoctorListingsComponent', () => {
  let component: DoctorListingsComponent;
  let fixture: ComponentFixture<DoctorListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
