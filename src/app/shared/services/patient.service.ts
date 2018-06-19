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
    },
];

addPatient(firstName: string, lastName: string, age: number, DOB: string, gender: string, phone: string, address: string, image: string) {
    this.patient.push({
        firstName: firstName,
        lastName: lastName,
        age: age, DOB: DOB,
        gender: gender,
        phone: phone,
        address: address,
        image: image});
}

// tslint:disable-next-line:max-line-length
updatePatient(id: number, firstName: string, lastName: string, age: number, DOB: string, gender: string, phone: string, address: string, image: string) {
    if (firstName != null) {
        this.patient[id].firstName = firstName;
    }
    if (lastName != null) {
        this.patient[id].lastName = lastName;
    }
    if (age != null) {
        this.patient[id].age = age;
    }
    if (DOB != null) {
        this.patient[id].DOB = DOB;
    }
    if (gender != null) {
        this.patient[id].gender = gender;
    }
    if (phone != null) {
        this.patient[id].phone = phone;
    }
    if (address != null) {
        this.patient[id].address = address;
    }
    if (image != null) {
        this.patient[id].image = image;
    }
}

getById(index: number): IPatient {
    return this.patient[index];
}

}
