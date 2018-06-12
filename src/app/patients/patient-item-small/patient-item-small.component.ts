import { Component, OnInit, Input } from '@angular/core';
import { IPatient } from '../../shared/interfaces/IPatient';

@Component({
  selector: 'app-patient-item-small',
  templateUrl: './patient-item-small.component.html',
  styleUrls: ['./patient-item-small.component.css']
})
export class PatientItemSmallComponent implements OnInit {

  @Input() patient: IPatient;
  @Input() patientIndex: number;
  constructor() { }

  ngOnInit() {
  }

}
