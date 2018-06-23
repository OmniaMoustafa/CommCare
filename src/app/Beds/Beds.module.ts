import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedsComponent } from './Beds.component';
import { BedSmallItemComponent } from './bed-small-item/bed-small-item.component';
import { BedsListingComponent } from './beds-listing/beds-listing.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild([{path:'beds',
    component:BedsComponent,children:[
      { path:'',component:BedsListingComponent}
    ]}])
  ],
  declarations: [BedsComponent,
    BedSmallItemComponent,
    BedsListingComponent
],
exports:[
  BedsComponent
]
})
export class BedsModule { }
