import { Component, OnInit, Input } from '@angular/core';
import { InitialPhysicianAssesment } from '../../../shared/interfaces/InitialPhysicianAssesment';
import { InitialPhysicianAssesmentService } from '../../../shared/services/MedicalHistoryService/InitialPhysicianAssesment.service';
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { Subscription } from 'rxjs';

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
  private subscription: Subscription;
  
  constructor(private _initialPhysicianAssesmentService: InitialPhysicianAssesmentService) { }

  ngOnInit() {
    this.InitialPhysicianAssesments = this._initialPhysicianAssesmentService.getListByUserName(this.patientFName, this.patientLName);
    this.subscription = this._initialPhysicianAssesmentService.InitialChanged
    .subscribe(
      (initial: InitialPhysicianAssesment[])=>{
        this.InitialPhysicianAssesments = initial.filter(i=> i.fName === this.patientFName && i.lName === this.patientLName);
      }
    )
  }

}
