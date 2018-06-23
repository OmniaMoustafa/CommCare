import { Component, OnInit } from '@angular/core';
import { Iroom } from '../shared/interfaces/Iroom';
import { RoomServiceService } from '../shared/services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  room:Iroom;
  // constructor(private roomservice:RoomServiceService, private activatedroute:ActivatedRoute) { 
  //   this.room={id:activatedroute.snapshot.params.id};
  // }

  ngOnInit() {
  }

}
