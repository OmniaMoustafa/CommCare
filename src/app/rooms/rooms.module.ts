import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RoomSmallItemComponent } from './room-small-item/room-small-item.component';
import { RoomListingComponent } from './room-listing/room-listing.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { BedsListingComponent } from '../Beds/beds-listing/beds-listing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragScrollModule,
    ModalModule.forRoot(),
    RouterModule.forChild([{path:'rooms',
    component:RoomsComponent,children:[
      { path:'',component:RoomListingComponent},
      { path: 'rooms/:name', component: BedsListingComponent },

    ]}])
  ],
  declarations: [RoomsComponent,
    RoomSmallItemComponent,
    RoomListingComponent
],
exports:[
  RoomsComponent,
   RouterModule
]
})
export class RoomsModule { }
