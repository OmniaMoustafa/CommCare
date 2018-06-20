import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemHomeComponent } from './system-home.component';
import { SliderComponent } from './Slider/Slider.component';
import { PackedgesComponent } from './Packedges/Packedges.component';
import { CarouselModule } from 'ngx-bootstrap';
import { DoctorsModule } from '../doctors/doctors.module';
import { HospitalsModule } from '../hospitals/hospitals.module';
import { DoctorCategoryModule } from '../doctorCategory/doctorCategory.module';
import { PaymentComponent } from './Packedges/payment/payment.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    DoctorCategoryModule,
    DoctorsModule,
    RouterModule.forRoot([
      { path:'payment', component:PaymentComponent},
    ]),
    HospitalsModule
    
  ],
  declarations: [SystemHomeComponent,
    SliderComponent,
    PackedgesComponent,
    PaymentComponent

],
exports:[
  SystemHomeComponent,
  SliderComponent,

  
]
})
export class SystemHomeModule { }
