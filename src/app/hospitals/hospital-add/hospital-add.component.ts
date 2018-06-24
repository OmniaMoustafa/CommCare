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
  public hos: Ihospital = {};
  cont: number = 5;
  constructor(private hosService: HospitalService, private router: Router) { }

  ngOnInit() {
  }
  public OnAdd(form: NgForm) {
    this.hos.id = this.cont;
    this.hosService.add(this.hos);

    this.cont++;
    // this.router.navigate(['/hospitals/viewAll']);
    this.router.navigate(['/hospitalHome/', this.hos.id]);
  }
  onClick() {
    this.hosService.setBool(false);
  }

}
