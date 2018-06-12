import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianSheetItemSmallComponent } from './physician-sheet-item-small.component';

describe('PhysicianSheetItemSmallComponent', () => {
  let component: PhysicianSheetItemSmallComponent;
  let fixture: ComponentFixture<PhysicianSheetItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianSheetItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianSheetItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
