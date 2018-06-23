import { Injectable } from '@angular/core';
import { IBed } from '../interfaces/IBed';

@Injectable({
  providedIn: 'root'
})
export class BedService {
private beds:IBed[];
constructor() {
  this.beds=[{
    id:1,
    bedNo:1001,
    image:'../../../assets/img/bed.jpg'
  },
  {
    id:2,
    bedNo:1002,
    image:'../../../assets/img/bed.jpg'
  },
  {
    id:3,
    bedNo:1003,
    image:'../../../assets/img/bed.jpg'
  },
  {
    id:4,
    bedNo:1004,
    image:'../../../assets/img/bed.jpg'
  },
  {
    id:5,
    bedNo:1005,
    image:'../../../assets/img/bed.jpg'
  }
]
 }
 public getAll(): IBed[] {

  return this.beds;
}
public getById(id: number): IBed {
  const i = this.beds.findIndex(b => b.id == id);
  return this.beds[i];
}
}
