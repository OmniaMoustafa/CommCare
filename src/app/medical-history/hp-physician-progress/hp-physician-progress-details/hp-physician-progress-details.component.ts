import { Component, OnInit, Input } from '@angular/core';
import { IHP } from '../../../shared/interfaces/IHp';
import { HPService } from '../../../shared/services/MedicalHistoryService/hp.service';

@Component({
  selector: 'app-hp-physician-progress-details',
  templateUrl: './hp-physician-progress-details.component.html',
  styleUrls: ['./hp-physician-progress-details.component.css']
})
export class HpPhysicianProgressDetailsComponent implements OnInit {

  @Input() index: number;
  hp: IHP;

  constructor(private _HPService: HPService) { }

  ngOnInit() {
    this.hp = this._HPService.getHpById(this.index);
  }

}
