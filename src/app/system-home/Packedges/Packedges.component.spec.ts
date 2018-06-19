/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackedgesComponent } from './Packedges.component';

describe('PackedgesComponent', () => {
  let component: PackedgesComponent;
  let fixture: ComponentFixture<PackedgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackedgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackedgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
