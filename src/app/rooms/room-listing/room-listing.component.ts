import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../../shared/services/room.service';
import { Iroom } from '../../shared/interfaces/Iroom';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-listing',
  templateUrl: './room-listing.component.html',
  styleUrls: ['./room-listing.component.css']
})
export class RoomListingComponent implements OnInit {

  rooms:Iroom[];
  room:Iroom;

  constructor(private roomservice:RoomServiceService , private activeRoute: ActivatedRoute) {
    this.rooms=this.roomservice.getAll();
   }
  ngOnInit() {
    //  this.room = new Iroom();
    //  this.room.name = this.activeRoute.snapshot.params.name;
    // if (this.room.name) {
    //   this.rooms = this.roomservice.getByRoom(this.room.name);
    // }
    // else
    // {
    //   this.rooms=this.roomservice.getAll();
    // }
  }

}
