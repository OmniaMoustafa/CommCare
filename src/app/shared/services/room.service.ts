import { Injectable } from '@angular/core';
import { Iroom } from '../interfaces/Iroom';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
 private  rooms:Iroom[];
constructor() {
  this.rooms=[
    { id:1,
      name:'Room A',
    imgUrl:'../../../assets/img/room1jpg.jpg',
    numberOfRoom:1002
    },

    {   
      id:2, 
    name:'Room B',
    imgUrl:'../../../assets/img/room4.jpg',
    numberOfRoom:1003
    },
    {
      id:3,
    name:'Room C',
    imgUrl:'../../../assets/img/room3.jpg',
    numberOfRoom:1004
    },
    {
      id:4,
    name:'Room D',
    imgUrl:'../../../assets/img/room4.jpg',
    numberOfRoom:1005
    },
    {
      id:5,
    name:'Room E',
    imgUrl:'../../../assets/img/room4.jpg',
    numberOfRoom:1006
    }
]
  
 }

 public getAll(): Iroom[] {

  return this.rooms;
}
public getById(id: number): Iroom {
  const i = this.rooms.findIndex(b => b.id == id);
  return this.rooms[i];
}
public getByRoom(name: string): Iroom[] {
  const i = this.rooms.filter(b => b.name.replace(/\s/g, '') == name);
  console.log(i);
  return i;
}
}
