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
  hos:Ihospital; 
  id:number;
  constructor(private hosservice:HospitalService,private activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
     this.hospitals=this.hosservice.getAll();

    this.hos=this.hosservice.getById(+this.id);
  });
}
}
