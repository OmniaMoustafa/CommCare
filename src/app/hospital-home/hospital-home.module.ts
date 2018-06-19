import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHomeComponent } from './hospital-home.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { QuoteComponent } from './quote/quote.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentsModule } from 'src/app/departments/departments.module';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DepartmentsModule,
    CarouselModule.forRoot()
  ],
  declarations: [HospitalHomeComponent, SliderComponent, AboutComponent, QuoteComponent]
})
export class HospitalHomeModule { }
