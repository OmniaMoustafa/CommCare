import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventItemSmallComponent } from './event-item-small/event-item-small.component';
import { Route, Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{path:'events',
    component:EventsComponent,
    children:[
      { path:'',component:EventListingComponent},
      {path:':id',component:EventDetailsComponent},
      {path:'add',component:EventAddComponent}
    ]}])
  ],
  declarations: [
    EventsComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent
,
    EventItemSmallComponent
],
exports:[
  EventsComponent
]
})
export class EventsModule { }
