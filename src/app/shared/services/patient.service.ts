import { Injectable } from '@angular/core';
import { IPatient } from '../interfaces/IPatient';

@Injectable()
export class PatientService {
    patient = [
    {
        firstName: 'Noor Elhoda',
        lastName: 'Ezzat',
        age: 23,
        DOB: '15/9/1994',
        gender: 'female',
        phone: '01142664848',
        address: 'cairo',
        image: './assets/img/patient1.jpg',
        bloodPressure: 95,
        bloodSugarLevel: 85
    },
    {
        firstName: 'Sara',
        lastName: 'Hossam',
        age: 23,
        DOB: '19/6/1994',
        gender: 'female',
        phone: '01185758948',
        address: 'cairo',
        image: './assets/img/patient3.jpg',
        bloodPressure: 95,
        bloodSugarLevel: 85
    },
    {
        firstName: 'Omnia',
        lastName: 'Moustafa',
        age: 23,
        DOB: '10/11/1994',
        gender: 'female',
        phone: '011985779003',
        address: 'cairo',
        image: './assets/img/patient4.jpg',
        bloodPressure: 95,
        bloodSugarLevel: 85
    },
    {
        firstName: 'Omnia',
        lastName: 'Ameer',
        age: 23,
        DOB: '13/4/1994',
        gender: 'female',
        phone: '01198654337',
        address: 'cairo',
        image: './assets/img/patient2.jpg',
        bloodPressure: 95,
        bloodSugarLevel: 85
    },
];

addPatient(firstName: string, lastName: string, age: number, DOB: string, gender: string, phone: string, address: string, image: string, bloodPressure: number, bloodSugarLevel: number) {
    this.patient.push({
        firstName: firstName,
        lastName: lastName,
        age: age, DOB: DOB,
        gender: gender,
        phone: phone,
        address: address,
        image: image,
        bloodPressure: bloodPressure,
        bloodSugarLevel: bloodSugarLevel});
}

// tslint:disable-next-line:max-line-length
updatePatient(patient: IPatient, id: number) {
    if (patient.firstName != null) {
        this.patient[id].firstName = patient.firstName;
    }
    if (patient.lastName != null) {
        this.patient[id].lastName = patient.lastName;
    }
    if (patient.age != null) {
        this.patient[id].age = patient.age;
    }
    if (patient.DOB != null) {
        this.patient[id].DOB = patient.DOB;
    }
    if (patient.gender != null) {
        this.patient[id].gender = patient.gender;
    }
    if (patient.phone != null) {
        this.patient[id].phone = patient.phone;
    }
    if (patient.address != null) {
        this.patient[id].address = patient.address;
    }
    if (patient.image != null) {
        this.patient[id].image = patient.image;
    }
    if (patient.bloodPressure != null) {
        this.patient[id].bloodPressure = patient.bloodPressure;
    }
    if (patient.bloodSugarLevel != null) {
        this.patient[id].bloodSugarLevel = patient.bloodSugarLevel;
    }
}

getById(index: number): IPatient {
    return this.patient[index];
}

}
