import { Component, OnInit, Input } from '@angular/core';
import { IPhysician } from '../../../shared/interfaces/IPhysician';
import { PhysicianService } from '../../../shared/services/MedicalHistoryService/physician.service';

@Component({
  selector: 'app-physician-sheet-details',
  templateUrl: './physician-sheet-details.component.html',
  styleUrls: ['./physician-sheet-details.component.css']
})
export class PhysicianSheetDetailsComponent implements OnInit {

  @Input() index: number;
  physician: IPhysician;

  constructor(private _PhysicianService: PhysicianService) { }

  ngOnInit() {
    this.physician = this._PhysicianService.getPhysicianById(this.index);
  }

}
