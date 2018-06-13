import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPhysicianAssesmentDetailsComponent } from './initial-physician-assesment-details.component';

describe('InitialPhysicianAssesmentDetailsComponent', () => {
  let component: InitialPhysicianAssesmentDetailsComponent;
  let fixture: ComponentFixture<InitialPhysicianAssesmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialPhysicianAssesmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPhysicianAssesmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
