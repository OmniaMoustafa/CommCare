import { Component, OnInit } from '@angular/core';
import { IPatient } from '../../shared/interfaces/IPatient';
import { PatientService } from '../../shared/services/patient.service';


@Component({
  selector: 'app-patient-listings',
  templateUrl: './patient-listings.component.html',
  styleUrls: ['./patient-listings.component.css']
})
export class PatientListingsComponent implements OnInit {
 patients: IPatient[] = [];
 filteredPatients: IPatient[];
 _listFilter: string;

 get listFilter(): string {
  return this._listFilter;
}
set listFilter(value: string) {
  this._listFilter = value;
  this.filteredPatients = this.listFilter ? this.performFilter(this.listFilter) : this.patients;
}

  constructor(private _PatientService: PatientService) { }

  performFilter(filterBy: string): IPatient[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.patients.filter((patient: IPatient) => patient.firstName.toLocaleLowerCase().startsWith(filterBy));
}

  ngOnInit() {
    this.patients = this._PatientService.patient;
    this.filteredPatients = this.patients;
  }

}
