import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPhysicianProgressDetailsComponent } from './hp-physician-progress-details.component';

describe('HpPhysicianProgressDetailsComponent', () => {
  let component: HpPhysicianProgressDetailsComponent;
  let fixture: ComponentFixture<HpPhysicianProgressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpPhysicianProgressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPhysicianProgressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
