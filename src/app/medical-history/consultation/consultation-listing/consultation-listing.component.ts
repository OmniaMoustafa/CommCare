import { Component, OnInit, Input } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { IConsultation } from '../../../shared/interfaces/IConsultation';
import { ConsultationService } from '../../../shared/services/MedicalHistoryService/consultation.service';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-consultation-listing',
  templateUrl: './consultation-listing.component.html',
  styleUrls: ['./consultation-listing.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class ConsultationListingComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;
  consultations: IConsultation[] = [];

  constructor(private _ConsultationService: ConsultationService) { }

  ngOnInit() {
    this.consultations = this._ConsultationService.getListByUserName(this.patientFName, this.patientLName);
  }

}
