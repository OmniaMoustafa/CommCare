import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, addHours } from 'date-fns';
import { colors } from '../../../calendar-utils/colors';
import { CalendarService } from '../../../shared/services/CalendarService/calendar.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-edit-calendar',
  templateUrl: './edit-calendar.component.html',
  styleUrls: ['./edit-calendar.component.css']
})
export class EditCalendarComponent implements OnInit {
  
  event: CalendarEvent;
  refresh: Subject<any> = new Subject();
  public events: CalendarEvent[];
  constructor(private calendarService: CalendarService) {
    this.events=calendarService.getAllEvents();
   }
  addEvent(): void {
    this.event = {
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }
    this.calendarService.addEvent(this.event);
    this.refresh.next();
  }  
  ngOnInit() {
  }

}