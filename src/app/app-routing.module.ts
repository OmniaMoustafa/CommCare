import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HospitalHomeModule } from 'src/app/hospital-home/hospital-home.module';
import { DepartmentsModule } from './departments/departments.module';
import { DoctorsModule } from 'src/app/doctors/doctors.module';
import { HospitalHomeComponent } from 'src/app/hospital-home/hospital-home.component';
import { SystemHomeComponent } from './system-home/system-home.component';

import { HospitalsModule } from 'src/app/hospitals/hospitals.module';

@NgModule({
  imports: [
    CommonModule,
    HospitalHomeModule,
    DepartmentsModule,
    DoctorsModule,
    HospitalsModule,
    RouterModule.forRoot([
      { path:'home', component: HospitalHomeComponent},
      {path:'systemHome' , component:SystemHomeComponent},
      { path:'', redirectTo:'/home', pathMatch:'full'}

    ])
  ],
  declarations: [],
  exports:[ RouterModule]

})
export class AppRoutingModule { }
