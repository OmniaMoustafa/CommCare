import { Component, OnInit, Input } from '@angular/core';
import { InitialPhysicianAssesment } from '../../../shared/interfaces/InitialPhysicianAssesment';
import { InitialPhysicianAssesmentService } from '../../../shared/services/MedicalHistoryService/InitialPhysicianAssesment.service';

@Component({
  selector: 'app-initial-physician-assesment-details',
  templateUrl: './initial-physician-assesment-details.component.html',
  styleUrls: ['./initial-physician-assesment-details.component.css']
})
export class InitialPhysicianAssesmentDetailsComponent implements OnInit {

  @Input() index: number;
  InitialPhysicianAssesment: InitialPhysicianAssesment;

  constructor(private _initialPhysicianAssesmentService: InitialPhysicianAssesmentService) { }

  ngOnInit() {
    this.InitialPhysicianAssesment = this._initialPhysicianAssesmentService.getInitialPhysicianAssesmentById(this.index);
  }

}
