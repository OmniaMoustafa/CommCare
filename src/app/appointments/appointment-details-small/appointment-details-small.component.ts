import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAppointment } from '../../shared/interfaces/IAppointment';
import { AppointmentService } from '../../shared/services/appointment.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-appointment-details-small',
  templateUrl: './appointment-details-small.component.html',
  styleUrls: ['./appointment-details-small.component.css']
})
export class AppointmentDetailsSmallComponent implements OnInit {
  appointment = new IAppointment();
  constructor(private appointmentData: AppointmentService, private router:Router) { console.log("rawaaa");}

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    
    // document.getElementById('ippo').getElementsByTagName('input');
    
    // const appoint: IAppointment = {
    //   FirstName: form.value['FName'],
    //   LastName: form.value['LName'],
    //   YourPhone: form.value['phone'],
    //   YourEmail: form.value['email'],
    // }
    console.log( this.appointment);
    this.appointmentData.AddAppointment(this.appointment);
    this.router.navigate(['/acceptance']);
   
//  console.log(document.getElementById('ippo').getElementsByTagName('input'));
    // this.appointmentData.appointment=appoint;
  
  



}
}