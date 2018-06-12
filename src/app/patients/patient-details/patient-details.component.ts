import { Component, OnInit, Input, TemplateRef} from '@angular/core';
import { IPatient } from '../../shared/interfaces/IPatient';
import { PatientService } from '../../shared/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient: IPatient;
  patientIndex: number;
  modalRef: BsModalRef;

  constructor(private _PatientService: PatientService, private activeLink: ActivatedRoute, private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.patientIndex = this.activeLink.snapshot.params['id'];
    this.patient = this._PatientService.getById(this.patientIndex);
  }

}
