import { Component, OnInit, Input, Output } from '@angular/core';
import { IPatient } from '../../shared/interfaces/IPatient';
import { PatientService } from '../../shared/services/patient.service';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
  @Input() patient: IPatient;
  @Input() patientIndex: number;
  gender: string;
  DOB: string;
  todayDate: Date = new Date();
  todayYear: number = this.todayDate.getFullYear();
  image: string;

  constructor(private _PatientService: PatientService) { }

  getAge(): number {
    const arr = this.DOB.split('-');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 4) {
        const DOBdyear = +arr[i];
        return this.todayYear - DOBdyear;
      }
    }
  }

  ngOnInit() {

  }

  onAdd(form: NgForm) : boolean {
    const patient: IPatient = {
      firstName: form.value['fName'],
      lastName: form.value['lName'],
      phone: form.value['phone'],
      address: form.value['address'],
      age: this.getAge(),
      image: form.value['image'],
      DOB: form.value['DOB'],
      gender: this.gender
    };
    this._PatientService.updatePatient(patient, this.patientIndex);
    return true;

  }
}
