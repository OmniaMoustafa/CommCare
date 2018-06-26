import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHomeComponent } from './hospital-home.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { QuoteComponent } from './quote/quote.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentsModule } from 'src/app/departments/departments.module';
import { CarouselModule } from 'ngx-bootstrap';
import { HospitalsModule } from 'src/app/hospitals/hospitals.module';
import { DoctorsModule } from 'src/app/doctors/doctors.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DepartmentsModule,
    HospitalsModule,
    DoctorsModule,
    CarouselModule.forRoot()
  ],
  declarations: [HospitalHomeComponent, SliderComponent, AboutComponent, QuoteComponent]
})
export class HospitalHomeModule { }
