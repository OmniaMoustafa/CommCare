import { Component, OnInit , Input } from '@angular/core';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { ActivatedRoute } from '@angular/router'
import { Router} from '@angular/router/src/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  department: Idepartment;
  ID:number;
  private sub : Subscription;
  constructor(private deptservice:DepartmentService , private activeLink:ActivatedRoute) {
    this.ID=this.activeLink.snapshot.params["ID"];
   }

  ngOnInit() {
     this.department=this.deptservice.getById(this.ID);
     this.sub = this.deptservice.deptChanged
     .subscribe(
       (deps: Idepartment[])=> {
         this.department = deps.find(i=>i.ID === this.ID);
       }
     )
     console.log(this.department); 

  }
    
  }


