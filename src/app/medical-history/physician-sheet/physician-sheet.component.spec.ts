import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianSheetComponent } from './physician-sheet.component';

describe('PhysicianSheetComponent', () => {
  let component: PhysicianSheetComponent;
  let fixture: ComponentFixture<PhysicianSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
