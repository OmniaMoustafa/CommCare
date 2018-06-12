import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationItemSmallComponent } from './consultation-item-small.component';

describe('ConsultationItemSmallComponent', () => {
  let component: ConsultationItemSmallComponent;
  let fixture: ComponentFixture<ConsultationItemSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationItemSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationItemSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
