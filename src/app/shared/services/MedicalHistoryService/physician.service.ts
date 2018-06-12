import { Injectable } from '@angular/core';
import { IPhysician } from '../../interfaces/IPhysician';

@Injectable()
export class PhysicianService {
    physician: IPhysician[] = [
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

    getListByUserName(fName: string, lName: string): IPhysician[] {
        return this.physician.filter(i => i.fName === fName , i => i.lName === lName);
    }

    getPhysicianById(index: number): IPhysician {
        return this.physician[index];
    }


}
