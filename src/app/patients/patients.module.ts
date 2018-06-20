import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientItemSmallComponent } from './patient-item-small/patient-item-small.component';
import { PatientListingsComponent } from './patient-listings/patient-listings.component';
import { PatientsComponent } from './patients.component';
import { Routes, RouterModule } from '@angular/router';
import { MedicalHistoryModule } from '../medical-history/medical-history.module';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

// const routesPatient: Routes = [
//   {
//     path: 'patients',
//     component: PatientsComponent,
//     children: [
//       {path: '', component: PatientListingsComponent},
//       {path: 'patientdetails/:id', component: PatientDetailsComponent},
//       {path: 'patientAdd', component: PatientAddComponent}
//     ]
//   }
// ];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MedicalHistoryModule,
    RouterModule.forChild([{ path:"docpatients",component: PatientsComponent,
      children: [
        {path: '', component: PatientListingsComponent},
        {path: ':id', component: PatientDetailsComponent},
        {path: 'patientAdd', component: PatientAddComponent}
      ]
    }]),
    ModalModule.forRoot()
  ],
  exports: [
    PatientsComponent,
    PatientListingsComponent,
    RouterModule
  ],
  declarations: [
    PatientsComponent,
    PatientAddComponent,
    PatientDetailsComponent,
    PatientItemSmallComponent,
    PatientListingsComponent]
})
export class PatientsModule { }
