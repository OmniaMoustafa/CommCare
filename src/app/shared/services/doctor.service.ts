import { Injectable } from "@angular/core";
import { Idoctor } from "src/app/shared/interfaces/idoctor";
import { Observable, Subject } from "rxjs";
@Injectable()
export class Doctorservice {
    public doctors: Idoctor[];
    constructor() {
        this.doctors = [
            {
                name: 'Sara',
                id: 1,
                speciality: 'Dentist ',
                detailedDesc: 'it is a detailed description about caradiology',
                photo: '../../../assets/img/doct2.jpg'
            },
            {
                id: 2,
                name: 'Sara hossam',
                speciality: 'Dentist ',
                detailedDesc: 'it is a detailed description about dental',
                photo: '../../../assets/img/detail.jpg'
            },
            {
                id: 3,
                name: 'Dina',
                speciality: 'Nutritionist ',
                detailedDesc: 'it is a detailed description about nutrition',
                photo: '../../../assets/img/doctor1.jpg'
            },
            {
                id: 4,
                name: 'omnia',
                speciality: 'Neurologist ',
                detailedDesc: 'it is a detailed description about nutrition',
                photo: '../../../assets/img/doct2.jpg'
            },
            
            {
                id: 5,
                name: 'radwa',
                speciality: 'Urologist ',
                detailedDesc: 'it is a detailed description about nutrition',
                photo: '../../../assets/img/doctor1.jpg'
            },
            {
                id: 6,
                name: 'Nour',
                speciality: 'Internist ',
                detailedDesc: 'it is a detailed description about nutrition',
                photo: '../../../assets/img/detail.jpg'
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
