import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPhysicianAssesmentListingComponent } from './initial-physician-assesment-listing.component';

describe('InitialPhysicianAssesmentListingComponent', () => {
  let component: InitialPhysicianAssesmentListingComponent;
  let fixture: ComponentFixture<InitialPhysicianAssesmentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPhysicianAssesmentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPhysicianAssesmentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
