import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../shared/services/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  constructor( public appointmentData : AppointmentService) { }

  ngOnInit() {
  }

}
