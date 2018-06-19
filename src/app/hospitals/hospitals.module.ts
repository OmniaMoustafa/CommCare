import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalitemComponent } from './hospital-listing/hospitalitem/hospitalitem.component';
import { HospitalListingComponent } from './hospital-listing/hospital-listing.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { HospitalsComponent } from './hospitals.component';
import { HospitalAddComponent } from './hospital-add/hospital-add.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'hospitals/viewAll',component:HospitalListingComponent},
      {path:'details/:id',component:HospitalDetailsComponent},
      {path:'hospital/add',component:HospitalAddComponent},
      
    ])
  ],
  declarations: [HospitalitemComponent, HospitalListingComponent, HospitalDetailsComponent, HospitalsComponent, HospitalAddComponent],
  exports:[
    
  ]
})
export class HospitalsModule { }
