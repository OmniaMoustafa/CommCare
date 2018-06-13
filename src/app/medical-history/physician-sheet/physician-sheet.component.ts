import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-physician-sheet',
  templateUrl: './physician-sheet.component.html',
  styleUrls: ['./physician-sheet.component.css']
})
export class PhysicianSheetComponent implements OnInit {

  @Input() patientFName: string;
  @Input() patientLName: string;

  constructor() { }

  ngOnInit() {
  }

}
