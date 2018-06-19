import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentDetailsSmallComponent } from './appointment-details-small/appointment-details-small.component';
import { Router, Route, Routes, RouterModule } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { FormsModule } from '@angular/forms';
const eventsRoutes:Routes=[
  {
    path:'appointments',
    component:AppointmentsComponent,
    children:[
      { path:'',component:AppointmentDetailsSmallComponent},
      {path:'details',component:AppointmentDetailsComponent}
    ]
  }
]
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(eventsRoutes)
  ],
  declarations: [AppointmentsComponent,
    AppointmentDetailsSmallComponent,
    AppointmentDetailsComponent
],
exports:[
  AppointmentsComponent
]
})
export class AppointmentsModule { }
