import { Component, OnInit, Input } from '@angular/core';
import { IHP } from '../../../shared/interfaces/IHp';
import { HPService } from '../../../shared/services/MedicalHistoryService/hp.service';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-hp-physician-progress-listing',
  templateUrl: './hp-physician-progress-listing.component.html',
  styleUrls: ['./hp-physician-progress-listing.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class HpPhysicianProgressListingComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;
  hps: IHP[] = [];

  constructor(private _HPService: HPService) { }

  ngOnInit() {
    this.hps = this._HPService.getListByUserName(this.patientFName, this.patientLName);
  }

}
