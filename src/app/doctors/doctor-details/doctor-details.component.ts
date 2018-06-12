import { Component, OnInit , Input } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
 doctors:Idoctor;
  constructor(private docservice:Doctorservice) { 
    
  }
  ngOnInit() {
  }

}
