import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionItemAddComponent } from './admission-item-add.component';

describe('AdmissionItemAddComponent', () => {
  let component: AdmissionItemAddComponent;
  let fixture: ComponentFixture<AdmissionItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
