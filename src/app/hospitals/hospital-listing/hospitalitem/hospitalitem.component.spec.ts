import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalitemComponent } from './hospitalitem.component';

describe('HospitalitemComponent', () => {
  let component: HospitalitemComponent;
  let fixture: ComponentFixture<HospitalitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
