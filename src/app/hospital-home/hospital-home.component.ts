import { Component, OnInit } from '@angular/core';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-hospital-home',
  templateUrl: './hospital-home.component.html',
  styleUrls: ['./hospital-home.component.css']
})
export class HospitalHomeComponent implements OnInit {
  departments:Idepartment[];
  constructor(private deptservice:DepartmentService) { 
    this.deptservice.getAll().subscribe(
      (data : Idepartment[]) => {this.departments = data}
    );
  }

  ngOnInit() {
  }

}
