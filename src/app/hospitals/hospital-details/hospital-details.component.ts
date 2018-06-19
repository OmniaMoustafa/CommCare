import { Component, OnInit } from '@angular/core';
import { Ihospital } from '../../shared/interfaces/ihospital';
import { HospitalService } from '../../shared/services/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {
  hospitals:Ihospital[];
  hospitalDetails:Ihospital; 
  id:number;
  constructor(private hosservice:HospitalService, activatedRoute:ActivatedRoute) { 
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
     this.hospitals=this.hosservice.getAll();

    this.hospitalDetails=this.hosservice.getById(this.id);
  }

}
