import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPhysicianProgressItemSmallComponent } from './hp-physician-progress-item-small.component';

describe('HpPhysicianProgressItemSmallComponent', () => {
  let component: HpPhysicianProgressItemSmallComponent;
  let fixture: ComponentFixture<HpPhysicianProgressItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpPhysicianProgressItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPhysicianProgressItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
