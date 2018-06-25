import { Injectable } from '@angular/core';
import { IAppointment } from '../interfaces/IAppointment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  public appointment: IAppointment;
  ChangedApp = new Subject<IAppointment>();
constructor() { 
}
AddAppointment(app : IAppointment){
  this.appointment=app;
  this.ChangedApp.next(app);
}
}

