import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './prescription.component';
import { Routes, RouterModule } from '@angular/router';

const doctorPrescription:Routes = [
  {path: "prescription", component:PrescriptionComponent },
  
 
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(doctorPrescription)
  ],
  declarations: [PrescriptionComponent,

  ],
  exports:[
    PrescriptionComponent,
    RouterModule
  ]
})
export class PrescriptionModule { }
