import { Component, OnInit, Input } from '@angular/core';
import { IAdmission } from '../../../shared/interfaces/IAdmission';

@Component({
  selector: 'app-admission-item-small',
  templateUrl: './admission-item-small.component.html',
  styleUrls: ['./admission-item-small.component.css']
})
export class AdmissionItemSmallComponent implements OnInit {

  @Input() admission: IAdmission;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
