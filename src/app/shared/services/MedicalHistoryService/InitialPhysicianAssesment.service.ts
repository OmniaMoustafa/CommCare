import { Injectable } from '@angular/core';
import { InitialPhysicianAssesment } from '../../interfaces/InitialPhysicianAssesment';

@Injectable()
export class InitialPhysicianAssesmentService {
    InitialPhysicianAssesment: InitialPhysicianAssesment[] = [
        {
            date: '12/12/2016',
            hospitalName: 'Dar el-Fouad',
            timeOfArrival: '12:00AM',
            gender: 'female',
            arrival: 'Alone',
            modeOfArrival: 'Ambulance',
            InformationObtained: 'Patient',
            PlaceOfIncident: 'Home',
            fName: 'Omnia',
            lName: 'Ameer'
        },
        {
            date: '01/01/2017',
            hospitalName: 'Dar el-Salam',
            timeOfArrival: '12:00AM',
            gender: 'female',
            arrival: 'Alone',
            modeOfArrival: 'Ambulance',
            InformationObtained: 'Patient',
            PlaceOfIncident: 'Home',
            fName: 'Noor Elhoda',
            lName: 'Ezzat'
        },
        {
            date: '02/01/2017',
            hospitalName: 'Helwan el-Aam',
            timeOfArrival: '12:00AM',
            gender: 'female',
            arrival: 'Alone',
            modeOfArrival: 'Ambulance',
            InformationObtained: 'Patient',
            PlaceOfIncident: 'Home',
            fName: 'Noor Elhoda',
            lName: 'Ezzat'
        },
        {
            date: '03/01/2017',
            hospitalName: 'Hassapo',
            timeOfArrival: '12:00AM',
            gender: 'female',
            arrival: 'Alone',
            modeOfArrival: 'Ambulance',
            InformationObtained: 'Patient',
            PlaceOfIncident: 'Home',
            fName: 'Omnia',
            lName: 'Ameer'
        }
    ];

    getListByUserName(fName: string, lName: string): InitialPhysicianAssesment[] {
        return this.InitialPhysicianAssesment.filter(i => i.fName === fName , i => i.lName === lName);
    }

    getInitialPhysicianAssesmentById(index: number): InitialPhysicianAssesment {
        return this.InitialPhysicianAssesment[index];
    }

    addInitialPhysicianAssesment(initial: InitialPhysicianAssesment) {
        this.InitialPhysicianAssesment.push({
            date: initial.date,
            hospitalName: initial.hospitalName,
            timeOfArrival: initial.timeOfArrival,
            gender: initial.gender,
            arrival: initial.arrival,
            modeOfArrival: initial.modeOfArrival,
            InformationObtained: initial.InformationObtained,
            PlaceOfIncident: initial.PlaceOfIncident,
            fName: initial.fName,
            lName: initial.lName
        });
        console.log(this.InitialPhysicianAssesment, this.InitialPhysicianAssesment.length);
    }
}
