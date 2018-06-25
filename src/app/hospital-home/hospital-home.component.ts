import { Component, OnInit } from '@angular/core';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { HospitalService } from 'src/app/shared/services/hospital.service';
import { Ihospital } from 'src/app/shared/interfaces/ihospital';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hospital-home',
  templateUrl: './hospital-home.component.html',
  styleUrls: ['./hospital-home.component.css']
})
export class HospitalHomeComponent implements OnInit {
  departments:Idepartment[];
  hospitals:Ihospital[];
  id:number;
  hospital:Ihospital={};
  constructor(private deptservice:DepartmentService,private hosService:HospitalService, private activatedRoute:ActivatedRoute) {
    
    console.log(this.hospital.photo);
   }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.hospital=this.hosService.getById(+this.id);

    });
  }

}
