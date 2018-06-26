import { Component, OnInit,Input } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';
import { Doctorservice } from '../../shared/services/doctor.service';

@Component({
  selector: 'app-doctors-witout-searching',
  templateUrl: './doctors-witout-searching.component.html',
  styleUrls: ['./doctors-witout-searching.component.css']
})
export class DoctorsWitoutSearchingComponent implements OnInit {
  @Input() doctors: Idoctor[];
  ddoctor:Idoctor;
  constructor(private docservice: Doctorservice) { }

  ngOnInit() {
    this.doctors = this.docservice.getAll().splice(0,3);
  }

}
