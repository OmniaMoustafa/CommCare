import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPhysicianAssesmentComponent } from './initial-physician-assesment.component';

describe('InitialPhysicianAssesmentComponent', () => {
  let component: InitialPhysicianAssesmentComponent;
  let fixture: ComponentFixture<InitialPhysicianAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPhysicianAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPhysicianAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
