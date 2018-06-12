import { Component, OnInit } from '@angular/core';
import { Ievents } from '../../shared/interfaces/Ievents';
import { EventsService } from '../../shared/services/Events/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventIndex: number;
  event: Ievents;
  eventedit:boolean=false;
  constructor(private eventService:EventsService,private activeLink:ActivatedRoute) { }

  ngOnInit() {
    this.eventIndex=this.activeLink.snapshot.params['id'];
 this.event=this.eventService.getById(this.eventIndex);
  }

}
