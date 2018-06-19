import { Component, OnInit } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';

@Component({
  selector: 'app-filterDoctors',
  templateUrl: './filterDoctors.component.html',
  styleUrls: ['./filterDoctors.component.css']
})
export class FilterDoctorsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }
public onFilter(doctorname, specialistname,cityname)
{
  
  console.log(doctorname.value);
  console.log(specialistname.value);
  console.log(cityname.value);
}
}
