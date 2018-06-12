import { Component, OnInit , Input } from '@angular/core';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { ActivatedRoute } from '@angular/router'
import { Router} from '@angular/router/src/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  department: Idepartment;
  id:number;
  constructor(private deptservice:DepartmentService , private activeLink:ActivatedRoute) {
    
   }

  ngOnInit() {
    /* this.department= this.deptservice.getById(this.department.id); */
     this.id=this.activeLink.snapshot.params["id"];
     this.department=this.deptservice.getById(this.id);
     console.log(this.department);
  }

}
