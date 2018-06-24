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
  filteredDepts:Idepartment[];
  _listFilter: string;

  constructor(private deptservice:DepartmentService) { 

    this.deptservice.getAll().subscribe( dep =>{
      this.departments = dep;
      
    }
    );
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredDepts = this.listFilter ? this.performFilter(this.listFilter) : this.departments;
  }

  performFilter(filterBy: string): Idepartment[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.departments.filter((dept: Idepartment) => dept.name.toLocaleLowerCase().startsWith(filterBy));
  }

  ngOnInit() {
    this.deptservice.getAll()
    .subscribe(deps =>{
      this.departments = deps;
    })
    // this.departments = this.deptservice.getAll();
    // this.filteredDepts = this.departments;

  }

}
}