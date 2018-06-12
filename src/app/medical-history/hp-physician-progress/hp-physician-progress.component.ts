import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hp-physician-progress',
  templateUrl: './hp-physician-progress.component.html',
  styleUrls: ['./hp-physician-progress.component.css']
})
export class HPPhysicianProgressComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;

  constructor() { }

  ngOnInit() {
  }

}
