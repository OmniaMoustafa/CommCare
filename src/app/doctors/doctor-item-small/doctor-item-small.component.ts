import { Component, OnInit, Input } from '@angular/core';
import { Idoctor } from '../../shared/interfaces/idoctor';

@Component({
  selector: 'app-doctor-item-small',
  templateUrl: './doctor-item-small.component.html',
  styleUrls: ['./doctor-item-small.component.css']
})
export class DoctorItemSmallComponent implements OnInit {
  @Input() doctor: Idoctor;
  constructor() { }

  ngOnInit() {
  }

}
