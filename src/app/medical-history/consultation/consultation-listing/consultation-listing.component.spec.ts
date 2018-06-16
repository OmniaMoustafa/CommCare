import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationListingComponent } from './consultation-listing.component';

describe('ConsultationListingComponent', () => {
  let component: ConsultationListingComponent;
  let fixture: ComponentFixture<ConsultationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
