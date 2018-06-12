import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HospitalHomeModule } from 'src/app/hospital-home/hospital-home.module';
import { DepartmentsModule } from './departments/departments.module';
import { DoctorsModule } from 'src/app/doctors/doctors.module';
import { HospitalHomeComponent } from 'src/app/hospital-home/hospital-home.component';

@NgModule({
  imports: [
    CommonModule,
    HospitalHomeModule,
    DepartmentsModule,
    DoctorsModule,
    RouterModule.forRoot([
      { path:'home', component: HospitalHomeComponent},
      { path:'', redirectTo:'/home', pathMatch:'full'}

    ])
  ],
  declarations: [],
  exports:[ RouterModule]

})
export class AppRoutingModule { }
