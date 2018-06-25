import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { IPatient } from '../../shared/interfaces/IPatient';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { PatientService } from '../../shared/services/patient.service';
import { Doctorservice } from '../../shared/services/doctor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-prescription',
  templateUrl: './doctor-prescription.component.html',
  styleUrls: ['./doctor-prescription.component.css']
})

 

export class DoctorPrescriptionComponent implements OnInit {
  public patient:IPatient={};
  public doctor:Idoctor={};
  constructor(private patientSer:PatientService,private doctorSer:Doctorservice,private router:Router ) { }

  ngOnInit() {
  }
public OnAdd(form:NgForm){
  this.patientSer.addPat(this.patient);
 
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
   console.log(this.patient);
}
}
