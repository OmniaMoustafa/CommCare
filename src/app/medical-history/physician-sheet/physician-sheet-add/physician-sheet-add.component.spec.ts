import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianSheetAddComponent } from './physician-sheet-add.component';

describe('PhysicianSheetAddComponent', () => {
  let component: PhysicianSheetAddComponent;
  let fixture: ComponentFixture<PhysicianSheetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianSheetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianSheetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
