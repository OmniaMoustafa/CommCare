import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EventsComponent,
    EventAddComponent,
    EventListingComponent,
    EventDetailsComponent
],
exports:[
  EventsComponent
]
})
export class EventsModule { }
