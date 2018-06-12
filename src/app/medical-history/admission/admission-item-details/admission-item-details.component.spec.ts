import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionItemDetailsComponent } from './admission-item-details.component';

describe('AdmissionItemDetailsComponent', () => {
  let component: AdmissionItemDetailsComponent;
  let fixture: ComponentFixture<AdmissionItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
