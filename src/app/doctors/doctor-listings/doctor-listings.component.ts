import { Component, OnInit, Input } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';
import { Category } from '../../shared/interfaces/icategory';
import { DoctorcategoryService } from '../../shared/services/doctorcategory.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-doctor-listings',
  templateUrl: './doctor-listings.component.html',
  styleUrls: ['./doctor-listings.component.css']
})
export class DoctorListingsComponent implements OnInit {
  @Input() doctors: Idoctor[];
  category: Category;
  constructor(private docservice: Doctorservice, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.category = new Category();
    this.category.categoryname = this.activeRoute.snapshot.params.categoryname;
    if (this.category.categoryname) {
      this.doctors = this.docservice.getBySpeciality(this.category.categoryname);
    }
    else {
      this.doctors = this.docservice.getAll();
    }
  }

}