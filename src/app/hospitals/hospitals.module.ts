import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalitemComponent } from './hospital-listing/hospitalitem/hospitalitem.component';
import { HospitalListingComponent } from './hospital-listing/hospital-listing.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { HospitalsComponent } from './hospitals.component';
import { HospitalAddComponent } from './hospital-add/hospital-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HospitalitemComponent, HospitalListingComponent, HospitalDetailsComponent, HospitalsComponent, HospitalAddComponent],
  exports:[
    
  ]
})
export class HospitalsModule { }
