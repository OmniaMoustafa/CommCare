import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AcceptanceComponent } from './Acceptance/Acceptance.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'acceptance', component:AcceptanceComponent}
    ])
  ],
  declarations: [AppointmentComponent,
    AppointmentFormComponent,
    AcceptanceComponent
],
exports:[
  AppointmentFormComponent,
  AcceptanceComponent
]
})
export class AppointmentModule { }
