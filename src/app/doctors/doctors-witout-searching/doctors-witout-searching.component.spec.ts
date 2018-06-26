import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsWitoutSearchingComponent } from './doctors-witout-searching.component';

describe('DoctorsWitoutSearchingComponent', () => {
  let component: DoctorsWitoutSearchingComponent;
  let fixture: ComponentFixture<DoctorsWitoutSearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsWitoutSearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsWitoutSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
