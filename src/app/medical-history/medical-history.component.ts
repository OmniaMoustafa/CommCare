import { Component, OnInit, Input } from '@angular/core';
import { IPatient } from '../shared/interfaces/IPatient';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;

  constructor() { }

  ngOnInit() {
  }

}
