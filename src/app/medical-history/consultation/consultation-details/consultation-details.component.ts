import { Component, OnInit, Input } from '@angular/core';
import { IConsultation } from '../../../shared/interfaces/IConsultation';
import { ConsultationService } from '../../../shared/services/MedicalHistoryService/consultation.service';

@Component({
  selector: 'app-consultation-details',
  templateUrl: './consultation-details.component.html',
  styleUrls: ['./consultation-details.component.css']
})
export class ConsultationDetailsComponent implements OnInit {

  @Input() index: number;
  consultation: IConsultation;

  constructor(private _ConsultationService: ConsultationService) { }

  ngOnInit() {
    this.consultation = this._ConsultationService.getConsultationById(this.index);
  }

}
