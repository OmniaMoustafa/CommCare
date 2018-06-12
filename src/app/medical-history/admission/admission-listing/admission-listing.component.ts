import { Component, OnInit, Input } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { IAdmission } from '../../../shared/interfaces/IAdmission';
import { AdmissionService } from '../../../shared/services/MedicalHistoryService/admission.service';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-admission-listing',
  templateUrl: './admission-listing.component.html',
  styleUrls: ['./admission-listing.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class AdmissionListingComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;
  admissions: IAdmission[] = [];

  constructor(private _AdmissionService: AdmissionService) { }

  ngOnInit() {
    this.admissions = this._AdmissionService.getListByUserName(this.patientFName, this.patientLName);
  }

}
