import { Component, OnInit, Input } from '@angular/core';
import { InitialPhysicianAssesment } from '../../../shared/interfaces/InitialPhysicianAssesment';
import { InitialPhysicianAssesmentService } from '../../../shared/services/MedicalHistoryService/InitialPhysicianAssesment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-initial-physician-assesment-details',
  templateUrl: './initial-physician-assesment-details.component.html',
  styleUrls: ['./initial-physician-assesment-details.component.css']
})
export class InitialPhysicianAssesmentDetailsComponent implements OnInit {

  // @Input() index: number;
  @Input() InitialPhysicianAssesment: InitialPhysicianAssesment;
  private sub: Subscription;

  constructor(private _initialPhysicianAssesmentService: InitialPhysicianAssesmentService) { }

  ngOnInit() {
    // this.InitialPhysicianAssesment = this._initialPhysicianAssesmentService.getInitialPhysicianAssesmentById(this.index);
    // this.sub = this._initialPhysicianAssesmentService.InitialChanged
    // .subscribe(
    //   (initial: InitialPhysicianAssesment[])=>{
    //     this.InitialPhysicianAssesment = initial[this.index];
    //   }
    // )
  }

}
