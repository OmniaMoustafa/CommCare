import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-initial-physician-assesment',
  templateUrl: './initial-physician-assesment.component.html',
  styleUrls: ['./initial-physician-assesment.component.css']
})
export class InitialPhysicianAssesmentComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;

  constructor() { }

  ngOnInit() {
  }

}
