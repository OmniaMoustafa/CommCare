import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms' 


import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent implements OnInit {


  constructor(private router: Router) { }

HospitalLogin:FormGroup;
  constructor() { }


  ngOnInit() {
  }
  OnClick()
  {
    this.router.navigate(['/home']);
  }

}
