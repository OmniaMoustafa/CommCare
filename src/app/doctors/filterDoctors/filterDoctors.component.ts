import { Component, OnInit, Output } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-filterDoctors',
  templateUrl: './filterDoctors.component.html',
  styleUrls: ['./filterDoctors.component.css']
})
export class FilterDoctorsComponent implements OnInit {

  // @Output() sendData = new EventEmitter();
  constructor(private docservice:Doctorservice) {
    
   }

  ngOnInit() {
    
  }
public onFilter(doctorname, specialistname,cityname)
{
  //  this.sendData.emit(doctorname,specialistname,cityname);
  
  console.log(doctorname.value);
  console.log(specialistname.value);
  console.log(cityname.value);
}
}
