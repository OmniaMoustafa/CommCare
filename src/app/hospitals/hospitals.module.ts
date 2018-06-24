import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalitemComponent } from './hospital-listing/hospitalitem/hospitalitem.component';
import { HospitalListingComponent } from './hospital-listing/hospital-listing.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { HospitalsComponent } from './hospitals.component';
import { HospitalAddComponent } from './hospital-add/hospital-add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DoctorsModule}  from '../doctors/doctors.module';
import { DepartmentsModule }  from '../departments/departments.module';
import { HospitalHomeComponent } from 'src/app/hospital-home/hospital-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DoctorsModule,
    DepartmentsModule,
    RouterModule.forChild([
      {path:'hospitals/viewAll',component:HospitalListingComponent},
      {path:'details/:id',component:HospitalDetailsComponent},
      {path:'hospital/add',component:HospitalAddComponent},
      {path:'hospitalHome/:id',component:HospitalHomeComponent}
      
    ])
  ],
  declarations: [HospitalitemComponent, HospitalListingComponent, HospitalDetailsComponent, HospitalsComponent, HospitalAddComponent],
  exports:[
    HospitalListingComponent,
    RouterModule,
    HospitalAddComponent

  ]
})
export class HospitalsModule {}
