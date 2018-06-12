import { Component, OnInit } from '@angular/core';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public dept: Idepartment= {};
  constructor( private deptService:DepartmentService , private router: Router) { }

  ngOnInit() {
  }
  public OnAdd(form: NgForm) {
      this.deptService.add(this.dept);
      this.router.navigate(['/departments']);
  }
}
