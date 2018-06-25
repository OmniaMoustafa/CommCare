import { Injectable } from "@angular/core";
import { Idoctor } from "src/app/shared/interfaces/idoctor";
import { Observable, Subject } from "rxjs";
@Injectable()
export class Doctorservice {
    public doctors: Idoctor[];
    constructor() {
        this.doctors = [
            {
                name: 'sara',
                id: 1,
                speciality: 'dentist doctor',
                detailedDesc: 'it is a detailed description about caradiology',
                photo: '../../../assets/img/doct2.jpg'
            },
            {
                id: 2,
                name: 'sara hossam',
                speciality: 'dentist doctor',
                detailedDesc: 'it is a detailed description about dental',
                photo: '../../../assets/img/detail.jpg'
            },
            {
                id: 3,
                name: 'dina',
                speciality: 'batna doctor',
                detailedDesc: 'it is a detailed description about nutrition',
                photo: '../../../assets/img/doctor1.jpg'
            }

        ];
    }




    public getAll(): Idoctor[] {

        return this.doctors;
    }

    public add(doctor: Idoctor) {
        this.doctors.push(doctor);
    }

    public getById(id: number): Idoctor {
        const i = this.doctors.findIndex(b => b.id == id);
        return this.doctors[i];
    }
    public getBySpeciality(name: string): Idoctor[] {
        const i = this.doctors.filter(b => b.speciality.replace(/\s/g, '') == name);
        console.log(i);
        return i;
    }

    public filterDoctors(doctorname: string): Idoctor[] {
        const ii = this.doctors.filter(a => a.name.replace(/\s/g, '') == doctorname)
        console.log(ii);
        return ii;
    }




}
