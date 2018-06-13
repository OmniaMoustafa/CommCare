import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianSheetListingComponent } from './physician-sheet-listing.component';

describe('PhysicianSheetListingComponent', () => {
  let component: PhysicianSheetListingComponent;
  let fixture: ComponentFixture<PhysicianSheetListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianSheetListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianSheetListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
