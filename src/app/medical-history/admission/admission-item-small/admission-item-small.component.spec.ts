import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionItemSmallComponent } from './admission-item-small.component';

describe('AdmissionItemSmallComponent', () => {
  let component: AdmissionItemSmallComponent;
  let fixture: ComponentFixture<AdmissionItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
