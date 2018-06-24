import { Component, OnInit, Input } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';
import { Category } from '../../shared/interfaces/icategory';
import { DoctorcategoryService } from '../../shared/services/doctorcategory.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {filter} from "rxjs/operators";
@Component({
  selector: 'app-doctor-listings',
  templateUrl: './doctor-listings.component.html',
  styleUrls: ['./doctor-listings.component.css']
})
export class DoctorListingsComponent implements OnInit {
  @Input() doctors: Idoctor[];
  ddoctor:Idoctor;
  category: Category;
  constructor(private docservice: Doctorservice, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.ddoctor = new Idoctor();
    this.category = new Category();
    this.category.categoryname = this.activeRoute.snapshot.params.categoryname;

    if (this.category.categoryname) {
      this.doctors = this.docservice.getBySpeciality(this.category.categoryname);
    }
    //   else if(this.doctors.do)
    //   {
    // this.doctors=this.docservice.filterDoctors(this.doctors.doctorname)
    //   }
    else {
      this.doctors = this.docservice.getAll();
    }
  }
  // filterDoctors(doctorname,specialistname,cityname){
  //   console.log(doctorname,specialistname, cityname )
  // }

}