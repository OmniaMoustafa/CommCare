import { Component, OnInit , Input } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctor_details:Idoctor;
  id:number
  constructor(private docservice:Doctorservice, activatedRoute:ActivatedRoute) { 
    this.id=activatedRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.doctor_details=this.docservice.getById(this.id);
  }

}
