import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  btnclick = function(){
    this.Router.navigateByUrl('/acceptance');
  };

}
