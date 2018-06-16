import { Component, OnInit, Input } from '@angular/core';
import { Ievents } from '../../shared/interfaces/Ievents';

@Component({
  selector: 'app-event-item-small',
  templateUrl: './event-item-small.component.html',
  styleUrls: ['./event-item-small.component.css']
})
export class EventItemSmallComponent implements OnInit {
@Input() event:Ievents;
@Input() eventIndex:number;
  constructor() { }

  ngOnInit() {
  }

}
