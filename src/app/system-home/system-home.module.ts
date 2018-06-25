import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemHomeComponent } from './system-home.component';
import { PackedgesComponent } from './Packedges/Packedges.component';
import { CarouselModule, ModalModule } from 'ngx-bootstrap';
import { DoctorsModule } from '../doctors/doctors.module';
import { HospitalsModule } from '../hospitals/hospitals.module';
import { DoctorCategoryModule } from '../doctorCategory/doctorCategory.module';

import { PaymentComponent } from './Packedges/payment/payment.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HospitalAddComponent } from '../hospitals/hospital-add/hospital-add.component';


@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    DoctorCategoryModule,
    DoctorsModule,
    RouterModule.forRoot([
      { path:'payment', component:PaymentComponent},
    ]),
    HospitalsModule,
    ModalModule.forRoot()
    
  ],
  declarations: [SystemHomeComponent,

    
    PackedgesComponent,
    PaymentComponent,
    HomeSliderComponent,
    

],
exports:[
  SystemHomeComponent,
  
]
})
export class SystemHomeModule { }
