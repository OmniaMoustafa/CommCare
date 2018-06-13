import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HPPhysicianProgressComponent } from './hp-physician-progress.component';

describe('HPPhysicianProgressComponent', () => {
  let component: HPPhysicianProgressComponent;
  let fixture: ComponentFixture<HPPhysicianProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HPPhysicianProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HPPhysicianProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
