import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemHomeComponent } from './system-home.component';
import { PackedgesComponent } from './Packedges/Packedges.component';
import { CarouselModule } from 'ngx-bootstrap';
import { DoctorsModule } from '../doctors/doctors.module';
import { HospitalsModule } from '../hospitals/hospitals.module';
import { DoctorCategoryModule } from '../doctorCategory/doctorCategory.module';
import { HomeSliderComponent } from './home-slider/home-slider.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    DoctorCategoryModule,
    DoctorsModule,
    HospitalsModule
    
  ],
  declarations: [SystemHomeComponent,
    PackedgesComponent,
    HomeSliderComponent
],
exports:[
  SystemHomeComponent,
  
]
})
export class SystemHomeModule { }
