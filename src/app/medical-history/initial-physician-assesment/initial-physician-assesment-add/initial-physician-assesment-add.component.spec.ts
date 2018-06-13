import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPhysicianAssesmentAddComponent } from './initial-physician-assesment-add.component';

describe('InitialPhysicianAssesmentAddComponent', () => {
  let component: InitialPhysicianAssesmentAddComponent;
  let fixture: ComponentFixture<InitialPhysicianAssesmentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPhysicianAssesmentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPhysicianAssesmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
