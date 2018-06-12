import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../shared/services/Events/events.service'
import { Ievents } from '../../shared/interfaces/Ievents';
@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {
events:Ievents[]=[];
filteredEvents: Ievents[];
 _listFilter: string;

get listFilter(): string {
  return this._listFilter;
}

set listFilter(value: string) {
  this._listFilter = value;
  this.filteredEvents = this.listFilter ? this.performFilter(this.listFilter):this.events;
}
  constructor(private EventService:EventsService) { }

  performFilter(filterBy: string): Ievents[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.events.filter((event: Ievents) => event.name.toLocaleLowerCase().startsWith(filterBy));
}

  ngOnInit() {
    this.events=this.EventService.events;
    this.filteredEvents = this.events;
  }

}
