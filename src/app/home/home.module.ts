import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent,
    SliderComponent
],
  exports:[ HomeComponent]
})
export class HomeModule { }
