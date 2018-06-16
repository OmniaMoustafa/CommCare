import { Component, OnInit, Input } from '@angular/core';
import { IConsultation } from '../../../shared/interfaces/IConsultation';

@Component({
  selector: 'app-consultation-item-small',
  templateUrl: './consultation-item-small.component.html',
  styleUrls: ['./consultation-item-small.component.css']
})
export class ConsultationItemSmallComponent implements OnInit {

  @Input() consultation: IConsultation;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
