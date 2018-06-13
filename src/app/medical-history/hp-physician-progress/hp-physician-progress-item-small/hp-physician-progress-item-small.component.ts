import { Component, OnInit, Input } from '@angular/core';
import { IHP } from '../../../shared/interfaces/IHp';

@Component({
  selector: 'app-hp-physician-progress-item-small',
  templateUrl: './hp-physician-progress-item-small.component.html',
  styleUrls: ['./hp-physician-progress-item-small.component.css']
})
export class HpPhysicianProgressItemSmallComponent implements OnInit {

  @Input() hp: IHP;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
