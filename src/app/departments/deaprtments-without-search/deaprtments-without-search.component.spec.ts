import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeaprtmentsWithoutSearchComponent } from './deaprtments-without-search.component';

describe('DeaprtmentsWithoutSearchComponent', () => {
  let component: DeaprtmentsWithoutSearchComponent;
  let fixture: ComponentFixture<DeaprtmentsWithoutSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeaprtmentsWithoutSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeaprtmentsWithoutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
