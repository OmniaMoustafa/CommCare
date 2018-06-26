import { Component, OnInit,Input } from '@angular/core';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms'   
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  public dept: Idepartment= {};
   department: Idepartment={};
  ID:number;
  constructor(private deptService:DepartmentService , private router: Router, private activeLink:ActivatedRoute) { 
    this.ID=this.activeLink.snapshot.params["ID"];
    this.department=this.deptService.getById(this.ID);
  }
  
  ngOnInit() {
    
  }
  public OnAdd(form: NgForm) {
    //this.deptService.add(this.dept);
    const value = form.value;
    this.deptService.Update(this.ID,value);
    this.router.navigate(['/departments']);
};
  


}
