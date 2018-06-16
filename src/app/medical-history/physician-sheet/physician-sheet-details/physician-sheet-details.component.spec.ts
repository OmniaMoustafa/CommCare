import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianSheetDetailsComponent } from './physician-sheet-details.component';

describe('PhysicianSheetDetailsComponent', () => {
  let component: PhysicianSheetDetailsComponent;
  let fixture: ComponentFixture<PhysicianSheetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianSheetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianSheetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
