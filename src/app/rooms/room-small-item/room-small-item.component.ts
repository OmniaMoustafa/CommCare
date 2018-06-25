import { Component, OnInit, Input } from '@angular/core';
import { Iroom } from '../../shared/interfaces/Iroom';

@Component({
  selector: 'app-room-small-item',
  templateUrl: './room-small-item.component.html',
  styleUrls: ['./room-small-item.component.css']
})
export class RoomSmallItemComponent implements OnInit {
  @Input() room: Iroom;
  constructor() { }

  ngOnInit() {
  }

}
