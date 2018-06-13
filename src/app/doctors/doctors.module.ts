import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListingsComponent } from './doctor-listings/doctor-listings.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorItemSmallComponent } from './doctor-item-small/doctor-item-small.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarService } from "../shared/services/CalendarService/calendar.service";
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { PrescriptionModule } from '../prescription/prescription.module';
import { Component } from '@angular/core/src/metadata/directives';
import { DoctorCategoryModule } from '../doctorCategory/doctorCategory.module';
import { FormsModule } from '@angular/forms';
 import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarUtilsModule } from '../calendar-utils/calendar-utils.module';
import { EditCalendarComponent } from './doctor-calendar/edit-calendar/edit-calendar.component';
import { DoctorsComponent } from './doctors.component';
import { EventListingComponent } from '../events/event-listing/event-listing.component';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    PrescriptionModule,
    DoctorCategoryModule,
    CalendarUtilsModule,
    FormsModule,
    CalendarModule.forRoot(),
     NgbModalModule.forRoot(),
    RouterModule.forChild([
        {path:'doctors/:categoryname',component:DoctorListingsComponent},
        {path:'doctorListing',component:DoctorListingsComponent},

        {path: "doctorProfile/:id" ,component:DoctorsComponent,children :[
        {path:'', component: DoctorDetailsComponent },
        {path:'ddoctors', redirectTo:"/doctorListing" ,pathMatch:'full'},
        {path:'add',component:DoctorAddComponent},
        {path:'prescription', component:PrescriptionComponent} ,
        {path:'calendar', component:DoctorCalendarComponent},
        {path:'calendar/edit',component:EditCalendarComponent},
        {path:'events',component:EventListingComponent}
      ]},
    ])
  ],

  declarations:
    [
      DoctorsComponent,
      DoctorDetailsComponent,
      DoctorListingsComponent,
      DoctorAddComponent,
      DoctorItemSmallComponent,
      DoctorCalendarComponent,
      EditCalendarComponent
    ],

 exports:[
  DoctorsComponent,
  DoctorCalendarComponent,
  RouterModule
],
providers:
[
  CalendarService,
]

})
export class DoctorsModule { }
