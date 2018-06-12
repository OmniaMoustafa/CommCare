import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPhysicianProgressAddComponent } from './hp-physician-progress-add.component';

describe('HpPhysicianProgressAddComponent', () => {
  let component: HpPhysicianProgressAddComponent;
  let fixture: ComponentFixture<HpPhysicianProgressAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpPhysicianProgressAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpPhysicianProgressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
