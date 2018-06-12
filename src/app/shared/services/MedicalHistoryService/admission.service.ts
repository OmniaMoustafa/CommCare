import { Injectable } from '@angular/core';
import { IAdmission } from '../../interfaces/IAdmission';

@Injectable()
export class AdmissionService {
    admission: IAdmission[] = [
        {
            date: '12/12/2016',
            hospitalName: 'Dar el-Fouad',
            fName: 'Omnia',
            lName: 'Ameer'
        },
        {
            date: '01/01/2017',
            hospitalName: 'Dar el-Salam',
            fName: 'Omnia',
            lName: 'Ameer'
        },
        {
            date: '02/01/2017',
            hospitalName: 'Helwan el-Aam',
            fName: 'Noor Elhoda',
            lName: 'Ezzat'
        },
        {
            date: '03/01/2017',
            hospitalName: 'Hassapo',
            fName: 'Noor Elhoda',
            lName: 'Ezzat'
        }
    ];

    getListByUserName(fName: string, lName: string): IAdmission[] {
        return this.admission.filter(i => i.fName === fName , i => i.lName === lName);
    }

    getAdmissionById(index: number): IAdmission {
        return this.admission[index];
    }


}
