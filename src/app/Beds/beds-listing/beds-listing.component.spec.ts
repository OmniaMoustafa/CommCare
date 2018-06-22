/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BedsListingComponent } from './beds-listing.component';

describe('BedsListingComponent', () => {
  let component: BedsListingComponent;
  let fixture: ComponentFixture<BedsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
