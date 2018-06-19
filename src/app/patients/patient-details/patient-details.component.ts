import { Component, OnInit, Input, TemplateRef} from '@angular/core';
import { IPatient } from '../../shared/interfaces/IPatient';
import { PatientService } from '../../shared/services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient: IPatient;
  patientIndex: number;

  constructor(private _PatientService: PatientService, private activeLink: ActivatedRoute) {
  }

  ngOnInit() {
    this.patientIndex = this.activeLink.snapshot.params['id'];
    this.patient = this._PatientService.getById(this.patientIndex);
  }

}
