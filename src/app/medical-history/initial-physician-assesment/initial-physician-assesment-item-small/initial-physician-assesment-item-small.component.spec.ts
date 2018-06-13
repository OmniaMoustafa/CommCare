import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPhysicianAssesmentItemSmallComponent } from './initial-physician-assesment-item-small.component';

describe('InitialPhysicianAssesmentItemSmallComponent', () => {
  let component: InitialPhysicianAssesmentItemSmallComponent;
  let fixture: ComponentFixture<InitialPhysicianAssesmentItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPhysicianAssesmentItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPhysicianAssesmentItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
