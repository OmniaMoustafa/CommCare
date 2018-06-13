import { Component, OnInit, Input } from '@angular/core';
import { IAdmission } from '../../../shared/interfaces/IAdmission';
import { AdmissionService } from '../../../shared/services/MedicalHistoryService/admission.service';

@Component({
  selector: 'app-admission-item-details',
  templateUrl: './admission-item-details.component.html',
  styleUrls: ['./admission-item-details.component.css']
})
export class AdmissionItemDetailsComponent implements OnInit {

  @Input() index: number;
  admission: IAdmission;

  constructor(private _AdmissionService: AdmissionService) { }

  ngOnInit() {
    this.admission = this._AdmissionService.getAdmissionById(this.index);
  }

}
