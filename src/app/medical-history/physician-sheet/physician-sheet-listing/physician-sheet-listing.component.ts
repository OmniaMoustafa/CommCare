import { Component, OnInit, Input } from '@angular/core';
import { IPhysician } from '../../../shared/interfaces/IPhysician';
import { PhysicianService } from '../../../shared/services/MedicalHistoryService/physician.service';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-physician-sheet-listing',
  templateUrl: './physician-sheet-listing.component.html',
  styleUrls: ['./physician-sheet-listing.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class PhysicianSheetListingComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;
  physicians: IPhysician[] = [];

  constructor(private _PhysicianService: PhysicianService) { }

  ngOnInit() {
    this.physicians = this._PhysicianService.getListByUserName(this.patientFName, this.patientLName);
  }

}
