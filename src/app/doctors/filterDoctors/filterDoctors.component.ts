import { Component, OnInit } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';

@Component({
  selector: 'app-filterDoctors',
  templateUrl: './filterDoctors.component.html',
  styleUrls: ['./filterDoctors.component.css']
})
export class FilterDoctorsComponent implements OnInit {


  constructor(private docservice:Doctorservice) {
    
   }

  ngOnInit() {
    
  }
public onFilter(doctorname, specialistname,cityname)
{
   
  
  console.log(doctorname.value);
  console.log(specialistname.value);
  console.log(cityname.value);
}
}
