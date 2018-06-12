import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  departments:Idepartment[];

  constructor(private deptservice:DepartmentService) { 
    this.departments=deptservice.getAll();
  }

  ngOnInit() {
  }
  
}
