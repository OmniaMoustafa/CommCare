import { Component, OnInit, Input } from '@angular/core';
import { InitialPhysicianAssesmentService } from '../../../shared/services/MedicalHistoryService/InitialPhysicianAssesment.service';
import { InitialPhysicianAssesment } from '../../../shared/interfaces/InitialPhysicianAssesment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-initial-physician-assesment-add',
  templateUrl: './initial-physician-assesment-add.component.html',
  styleUrls: ['./initial-physician-assesment-add.component.css']
})
export class InitialPhysicianAssesmentAddComponent implements OnInit {
  @Input() patientFName: string;
  @Input() patientLName: string;
  
  constructor(private _InitialPhysicianAssesmentService: InitialPhysicianAssesmentService) { }

  ngOnInit() {

  }
  onAdd(form: NgForm){
    const InitialPhysicianAssesment: InitialPhysicianAssesment = {
      date: form.value['date'],
    hospitalName: form.value['hospitalName'],
    timeOfArrival: form.value['timeofarrival'],
    gender:form.value['gender'],
    arrival: form.value['Arrival'],
    modeOfArrival: form.value['ModeOfArrival'],
    InformationObtained: form.value['InformationObtained'],
    PlaceOfIncident: form.value['PlaceOfIncident'],
    fName: this.patientFName,
    lName: this.patientLName
    }
this._InitialPhysicianAssesmentService.addInitialPhysicianAssesment(InitialPhysicianAssesment);
}
}