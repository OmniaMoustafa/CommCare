import { Component, OnInit } from '@angular/core';
import { Idoctor } from '../shared/interfaces/idoctor';
import { Doctorservice } from '../shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctor:Idoctor;
  constructor(private docservice:Doctorservice, private activatedroute:ActivatedRoute) { 
    this.doctor={id:activatedroute.snapshot.params.id};
  }

  ngOnInit() {
  }

}
