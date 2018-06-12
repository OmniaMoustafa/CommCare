import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPhysicianProgressListingComponent } from './hp-physician-progress-listing.component';

describe('HpPhysicianProgressListingComponent', () => {
  let component: HpPhysicianProgressListingComponent;
  let fixture: ComponentFixture<HpPhysicianProgressListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpPhysicianProgressListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPhysicianProgressListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
