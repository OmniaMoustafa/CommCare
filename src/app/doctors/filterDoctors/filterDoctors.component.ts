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
  //constructor(private docservice:Doctorservice) {
    
  // }

  // ngOnInit() {
    
  // }
// public onFilter(doctorname, specialistname,cityname)
// {
//   //  this.sendData.emit(doctorname,specialistname,cityname);
  
//   console.log(doctorname.value);
//   console.log(specialistname.value);
//   console.log(cityname.value);
// }








doctors:Idoctor[]=[];
filteredEvents:Idoctor[];
 _listFilter: string;

get listFilter(): string {
  return this._listFilter;
}

set listFilter(value: string) {
  this._listFilter = value;
  this.filteredEvents = this.listFilter ? this.performFilter(this.listFilter):this.doctors;
}
  constructor(private docservice:Doctorservice) { }

  performFilter(filterBy: string): Idoctor[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.doctors.filter((doctor: Idoctor) => doctor.name.toLocaleLowerCase().startsWith(filterBy));
}

  ngOnInit() {
    this.doctors=this.docservice.doctors;
    this.filteredEvents = this.doctors;
  }





}
