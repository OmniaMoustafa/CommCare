import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ievents } from '../../interfaces/Ievents';
import { NgbDatepickerMonthView } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
events:Ievents[] =[{
  name:'cancerEvent',
  address:'57357hospital',
  location:'cairo',
  date:'16 Jan',
  imgUrl:'../../../assets/img/detail.jpg',
  time:8,
  details:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, est a finibus lobortis, eros justo rutrum est, in fringilla'

},
{
  name:'Flu Event',
  address:'57357hospital',
  location:'cairo',
  date:'16 Jan',
  imgUrl:'../../../assets/img/detail.jpg',
  time:8,
  details:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, est a finibus lobortis, eros justo rutrum est, in fringilla'
},
{
  name:'Medical Event',
  address:'57357hospital',
  location:'cairo',
  date:'16 Jan',
  imgUrl:'../../../assets/img/detail.jpg',
  time:8,
  details:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, est a finibus lobortis, eros justo rutrum est, in fringilla'
},
{
  name:'Medical Event2',
  address:'57357hospital',
  location:'cairo',
  date:'16 Jan',
  imgUrl:'../../../assets/img/detail.jpg',
  time:8,
  details:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, est a finibus lobortis, eros justo rutrum est, in fringilla'
},
{
  name:'cancerEvent2',
  address:'57357hospital',
  location:'cairo',
  date:'16 Jan',
  imgUrl:'../../../assets/img/detail.jpg',
  time:8,
  details:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, est a finibus lobortis, eros justo rutrum est, in fringilla'

}]
getById(id:number):Ievents{
  return this.events[id];
}
}
