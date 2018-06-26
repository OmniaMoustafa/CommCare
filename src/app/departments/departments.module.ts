import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments.component';
import { ListingComponent } from './department-listing/listing.component';
import { DetailsComponent } from './department-details/details.component';
import { AddComponent } from './department-add/add.component';
import { DepartmentItemSmallComponent } from './department-item-small/department-item-small.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DeaprtmentsWithoutSearchComponent } from './deaprtments-without-search/deaprtments-without-search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'departments', component: DepartmentsComponent, children:[
        {path:'', component: ListingComponent },
        {path:'listing', component: ListingComponent },
        {path:'details/:ID',component:DetailsComponent},
        {path:'details/:ID/edit',component:DepartmentEditComponent},
        {path:'add',component:AddComponent},
        
      ]},
    ])
  ],
  declarations: [
    ListingComponent, 
    DetailsComponent, 
    AddComponent, 
    DepartmentItemSmallComponent,
    DepartmentsComponent,
    DepartmentEditComponent,
    DeaprtmentsWithoutSearchComponent
  ],
  exports:[
    DepartmentsComponent,
    DepartmentItemSmallComponent,
    RouterModule,
    ListingComponent,
    DeaprtmentsWithoutSearchComponent
  ]
})
export class DepartmentsModule { }
