import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionListingComponent } from './admission-listing.component';

describe('AdmissionListingComponent', () => {
  let component: AdmissionListingComponent;
  let fixture: ComponentFixture<AdmissionListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
