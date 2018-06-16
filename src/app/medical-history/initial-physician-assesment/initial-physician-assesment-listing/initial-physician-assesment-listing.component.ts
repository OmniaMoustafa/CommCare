import { Component, OnInit, Input } from '@angular/core';
import { InitialPhysicianAssesment } from '../../../shared/interfaces/InitialPhysicianAssesment';
import { InitialPhysicianAssesmentService } from '../../../shared/services/MedicalHistoryService/InitialPhysicianAssesment.service';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-initial-physician-assesment-listing',
  templateUrl: './initial-physician-assesment-listing.component.html',
  styleUrls: ['./initial-physician-assesment-listing.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class InitialPhysicianAssesmentListingComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;
  InitialPhysicianAssesments: InitialPhysicianAssesment[] = [];

  constructor(private _initialPhysicianAssesmentService: InitialPhysicianAssesmentService) { }

  ngOnInit() {
    this.InitialPhysicianAssesments = this._initialPhysicianAssesmentService.getListByUserName(this.patientFName, this.patientLName);
  }

}
