import { Injectable } from '@angular/core';
import { IConsultation } from '../../interfaces/IConsultation';


@Injectable()
export class ConsultationService {
    consultation: IConsultation[] = [
        {
            date: '01/11/2016',
            hospitalName: 'Dar el-Fouad',
            toDepartment: 'Analysis',
            fromDepartment: 'Linear Algebra',
            reasonForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            responseForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            fName: 'Omnia',
            lName: 'Ameer'
        },
        {
            date: '12/11/2016',
            hospitalName: 'Helwan el-Aam',
            toDepartment: 'Analysis',
            fromDepartment: 'Linear Algebra',
            reasonForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            responseForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            fName: 'Omnia',
            lName: 'Ameer'
        },
        {
            date: '20/11/2016',
            hospitalName: 'el-Aser el-eni',
            toDepartment: 'Analysis',
            fromDepartment: 'Linear Algebra',
            reasonForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            responseForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            fName: 'Noor Elhoda',
            lName: 'Ezzat'
        },
        {
            date: '25/11/2016',
            hospitalName: 'Dar el-Salam',
            toDepartment: 'Analysis',
            fromDepartment: 'Linear Algebra',
            reasonForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            responseForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            fName: 'Noor Elhoda',
            lName: 'Ezzat'
        }
    ];

    getListByUserName(fName: string, lName: string): IConsultation[] {
        return this.consultation.filter(i => i.fName === fName , i => i.lName === lName);
    }

    getConsultationById(index: number): IConsultation {
        return this.consultation[index];
    }


}
