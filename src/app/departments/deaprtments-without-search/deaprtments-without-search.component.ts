import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';

@Component({
  selector: 'app-deaprtments-without-search',
  templateUrl: './deaprtments-without-search.component.html',
  styleUrls: ['./deaprtments-without-search.component.css']
})
export class DeaprtmentsWithoutSearchComponent implements OnInit {
  departments:Idepartment[];
  constructor(private deptservice:DepartmentService) { }

  ngOnInit() {
    this.departments = this.deptservice.getAll();
  }

}
