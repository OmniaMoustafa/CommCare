import { Injectable } from "@angular/core";
import { Idoctor } from "src/app/shared/interfaces/idoctor";
@Injectable()
export class Doctorservice{
    private doctors:Idoctor[];
    constructor()
    {
        this.doctors=[
            {
                name:'sara',
                id:1,
                speciality:'dentist doctor',
                detailedDesc:'it is a detailed description about caradiology',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'
            },
            {
                id:2,
                name:'sara hossam',
                speciality:'dentist doctor',
                detailedDesc:'it is a detailed description about dental',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png' 
            },
            {
                id:3,
                name:'dina',
                speciality:'batna doctor',
                detailedDesc:'it is a detailed description about nutrition',
                photo:'../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'  
            }
           
        ];
    }

    public getAll(): Idoctor[] {
        
        return this.doctors;
    }

    public add(doctor:Idoctor){
        this.doctors.push(doctor);
    }

    public getById(id:number):Idoctor{
        const i=this.doctors.findIndex(b=>b.id == id);
        return this.doctors[i];
    }
    public getBySpeciality(name: string):Idoctor[]{
        const i=this.doctors.filter(b=>b.speciality.replace(/\s/g,'') == name);
        console.log(i);
        return i;
      }

}
