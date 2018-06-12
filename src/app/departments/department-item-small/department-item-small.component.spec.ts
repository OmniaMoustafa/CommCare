import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentItemSmallComponent } from './department-item-small.component';

describe('DepartmentItemSmallComponent', () => {
  let component: DepartmentItemSmallComponent;
  let fixture: ComponentFixture<DepartmentItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
