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
import { Component } from '@angular/core/src/metadata/directives';
import { DoctorCategoryModule } from '../doctorCategory/doctorCategory.module';
import { FormsModule } from '@angular/forms';
 import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarUtilsModule } from '../calendar-utils/calendar-utils.module';
import { EditCalendarComponent } from './doctor-calendar/edit-calendar/edit-calendar.component';
import { DoctorsComponent } from './doctors.component';
import { EventListingComponent } from '../events/event-listing/event-listing.component';
import { DoctorPrescriptionComponent } from './doctor-prescription/doctor-prescription.component';
import { FilterDoctorsComponent } from './filterDoctors/filterDoctors.component';
import { PatientListingsComponent } from '../patients/patient-listings/patient-listings.component';
import { PatientsModule } from '../patients/patients.module';
import { EventsModule } from '../events/events.module';
@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    DoctorCategoryModule,
    CalendarUtilsModule,
    FormsModule,
    PatientsModule,
    EventsModule,
    CalendarModule.forRoot(),
     NgbModalModule.forRoot(),
    RouterModule.forChild([
        {path:'doctors/:categoryname',component:DoctorListingsComponent},
        {path:'doctorListing',component:DoctorListingsComponent},

        {path: "doctorProfile/:id" ,component:DoctorsComponent,children :[
        {path:'', component: DoctorDetailsComponent },
        {path:'Listing', component:DoctorListingsComponent},
        {path:'add',component:DoctorAddComponent},
        {path:'WritePrescription', component:DoctorPrescriptionComponent} ,
        {path:'calendar', component:DoctorCalendarComponent},
        {path:'calendar/edit',component:EditCalendarComponent},
        {path:'docevents',component:EventListingComponent},
        {path:'docpatients',component:PatientListingsComponent}
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
      EditCalendarComponent,
      DoctorPrescriptionComponent,
      FilterDoctorsComponent
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
