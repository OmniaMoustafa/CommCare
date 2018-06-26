import { Injectable } from "@angular/core";
import { Idepartment } from "src/app/shared/interfaces/idepartment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class DepartmentService {
    private departments: Idepartment[];
    deptChanged = new Subject<Idepartment[]>();
    constructor(private httpClient:HttpClient) {
        this.departments = [
             {
                ID: 1,
                Name: 'Cardiology',
                Description: 'We care about your Heart',
                DetailedDescription: 'Cardiology department has a great staff of doctors and nurses who is really care about you , we have 10 rooms having 20 beds in that departmnet and it has great equipments to help you to recover soon  ',
                Photo: '../../../assets/img/cardiology.png',
                Rooms:10,
                Beds :20
                
            },
            {
                ID: 2,
                Name: 'Dental',
                Description: 'We care about your teeth',
                DetailedDescription: 'Dental department has a great staff of doctors and nurses who is really care about you , we have 7 rooms having 14 beds in that departmnet and it has great equipments to help you to recover soon',
                Photo: '../../../assets//img/dental.jpg',
                Rooms:7,
                Beds :14
            },
            {
                ID: 3,
                Name: 'Nutrition',
                Description: 'We care about your Diet',
                DetailedDescription: 'Nutrition department has a great staff of doctors and nurses who is really care about you , we have 8 rooms having 11 beds in that departmnet and it has great equipments to help you to recover soon',
                Photo: '../../../assets//img/nutrition.jpeg',
                Rooms:8,
                Beds :11
            }];
    }

    public getAll():Idepartment[] {
        //return this.httpClient.get<Idepartment[]>('http://localhost:63451/api/Departments?type=json');
         return this.departments;
    }

     public getById(id: number): Idepartment {

        const index = this.departments.findIndex(a => a.ID == id);
        return this.departments[index];
    } 
    public add(dept: Idepartment) {
        
        this.departments.push(dept);
        this.deptChanged.next(this.departments.slice());
        console.log(this.departments);
    }
    public Update(id:number,dept:Idepartment)
    {
        var d = this.departments.find(i=>i.ID === id);
        if (dept.Name != null) {
            d.Name = dept.Name;
        }
        if (dept.Description != null) {
            d.Description = dept.Description;
        }
        if (dept.DetailedDescription != null) {
            d.DetailedDescription = dept.DetailedDescription;
        }
        if (dept.Photo != null) {
            d.Photo = dept.Photo;
        }
        if (dept.Rooms != null) {
            d.Rooms = dept.Rooms;
        }
        if (dept.Beds != null) {
            d.Beds = dept.Beds;
        }
        
    }
}