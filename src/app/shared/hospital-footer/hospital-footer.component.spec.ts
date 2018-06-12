import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalFooterComponent } from './hospital-footer.component';

describe('HospitalFooterComponent', () => {
  let component: HospitalFooterComponent;
  let fixture: ComponentFixture<HospitalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
