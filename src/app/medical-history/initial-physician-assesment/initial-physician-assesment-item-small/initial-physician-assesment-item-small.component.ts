import { Component, OnInit, Input } from '@angular/core';
import { InitialPhysicianAssesment } from '../../../shared/interfaces/InitialPhysicianAssesment';

@Component({
  selector: 'app-initial-physician-assesment-item-small',
  templateUrl: './initial-physician-assesment-item-small.component.html',
  styleUrls: ['./initial-physician-assesment-item-small.component.css']
})
export class InitialPhysicianAssesmentItemSmallComponent implements OnInit {

  @Input() InitialPhysicianAssesment: InitialPhysicianAssesment;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
