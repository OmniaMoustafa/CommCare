import { Component, OnInit } from '@angular/core';
import { Ihospital } from 'src/app/shared/interfaces/ihospital';
import { HospitalService } from 'src/app/shared/services/hospital.service';
import { NgForm, NgModel } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-add',
  templateUrl: './hospital-add.component.html',
  styleUrls: ['./hospital-add.component.css']
})
export class HospitalAddComponent implements OnInit {
  public hos: Ihospital= {};
  constructor(private hosService:HospitalService , private router: Router) { }

  ngOnInit() {
  }
  public OnAdd(form: NgForm) {
    this.hosService.add(this.hos);
    this.router.navigate(['/hospitals/viewAll']);
    this.router.navigate(['/details/:id']);
}

}
