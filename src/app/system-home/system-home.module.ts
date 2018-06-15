import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemHomeComponent } from './system-home.component';
import { SliderComponent } from './Slider/Slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SystemHomeComponent,
    SliderComponent
]
})
export class SystemHomeModule { }
