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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorCategoryModule } from '../doctorCategory/doctorCategory.module';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { ModalModule } from "ngx-bootstrap";
import { CalendarUtilsModule } from '../calendar-utils/calendar-utils.module';
import { EditCalendarComponent } from './doctor-calendar/edit-calendar/edit-calendar.component';
import { DoctorsComponent } from './doctors.component';
import { EventListingComponent } from '../events/event-listing/event-listing.component';
import { DoctorPrescriptionComponent } from './doctor-prescription/doctor-prescription.component';
import { FilterDoctorsComponent } from './filterDoctors/filterDoctors.component';
import { PatientListingsComponent } from '../patients/patient-listings/patient-listings.component';
import { PatientsModule } from '../patients/patients.module';
import { EventsModule } from '../events/events.module';
import { AppointmentDetailsSmallComponent } from '../appointments/appointment-details-small/appointment-details-small.component';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details.component';
import { MedicalHistoryComponent } from 'src/app/medical-history/medical-history.component';
import { PatientDetailsComponent } from 'src/app/patients/patient-details/patient-details.component';
import { PatientsComponent } from '../patients/patients.component';


@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    DoctorCategoryModule,
    CalendarUtilsModule,
    BrowserAnimationsModule,
    FormsModule,
    PatientsModule,
    EventsModule,
    ModalModule.forRoot(),
    CalendarModule.forRoot(),
    RouterModule.forChild([
      { path: 'doctors/:categoryname', component: DoctorListingsComponent },
      { path: 'doctorListing', component: DoctorListingsComponent },


      {
        path: "doctorProfile/:id", component: DoctorsComponent, children: [
          { path: '', component: DoctorDetailsComponent },
          { path: 'Listing', component: DoctorListingsComponent },
          { path: 'add', component: DoctorAddComponent },
          { path: 'WritePrescription', component: DoctorPrescriptionComponent },
          { path: 'calendar', component: DoctorCalendarComponent },
          { path: 'calendar/edit', component: EditCalendarComponent },
          { path: 'docevents', component: EventListingComponent },
          { path: 'docevents/:id', component: EventDetailsComponent },
          { path: 'docpatients', component: PatientListingsComponent },
          { path: 'docpatients/:id', component: PatientDetailsComponent }

        ]
      },
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

  exports: [
    DoctorsComponent,
    DoctorCalendarComponent,
    DoctorListingsComponent,
    DoctorAddComponent,
    DoctorItemSmallComponent,
    DoctorCalendarComponent,
    EditCalendarComponent,
    RouterModule
  ],
  providers:
    [
      CalendarService,
    ]

})
export class DoctorsModule { }
