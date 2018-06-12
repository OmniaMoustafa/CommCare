import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorItemSmallComponent } from './doctor-item-small.component';

describe('DoctorItemSmallComponent', () => {
  let component: DoctorItemSmallComponent;
  let fixture: ComponentFixture<DoctorItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
