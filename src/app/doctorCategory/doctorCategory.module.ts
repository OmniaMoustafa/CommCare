import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorCategoryComponent } from './doctorCategory.component';
import { SmallitemComponent } from './smallitem/smallitem.component';
import { ListingAllComponent } from './listingAll/listingAll.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterDoctorsComponent } from './filterDoctors/filterDoctors.component';
import { DragScrollModule } from 'ngx-drag-scroll';
@NgModule({
  imports: [
    CommonModule,
    DragScrollModule,
    RouterModule.forChild([
      {path:'categories',component:DoctorCategoryComponent},
    ])
  ],
  declarations: [
    DoctorCategoryComponent,
    SmallitemComponent,
    ListingAllComponent,
    FilterDoctorsComponent
    
],
  exports:[
    DoctorCategoryComponent,
    RouterModule
  ]

})
export class DoctorCategoryModule { 
}