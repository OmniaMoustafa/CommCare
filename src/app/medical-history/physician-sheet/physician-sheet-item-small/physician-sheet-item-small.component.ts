import { Component, OnInit, Input } from '@angular/core';
import { IPhysician } from '../../../shared/interfaces/IPhysician';

@Component({
  selector: 'app-physician-sheet-item-small',
  templateUrl: './physician-sheet-item-small.component.html',
  styleUrls: ['./physician-sheet-item-small.component.css']
})
export class PhysicianSheetItemSmallComponent implements OnInit {

  @Input() physician: IPhysician;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
