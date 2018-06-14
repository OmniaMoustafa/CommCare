import { Component, OnInit } from '@angular/core';
import { Ihospital } from '../../shared/interfaces/ihospital';
import { HospitalService } from '../../shared/services/hospital.service';

@Component({
  selector: 'app-hospital-listing',
  templateUrl: './hospital-listing.component.html',
  styleUrls: ['./hospital-listing.component.css']
})
export class HospitalListingComponent implements OnInit {
  public hospitals: Ihospital[];
  constructor(private hospitalservice : HospitalService) {
    this.hospitals = []
  }

  ngOnInit() {
    this.hospitals=this.hospitalservice.getAll();
  }

}
