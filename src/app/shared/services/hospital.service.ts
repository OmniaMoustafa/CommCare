import { Injectable } from '@angular/core';
import { Ihospital } from 'src/app/shared/interfaces/ihospital';

@Injectable()
export class HospitalService {
    private hospitals: Ihospital[];
    constructor() {
        this.hospitals =
            [
                {
                    id: 1,
                    name: 'El Gala',
                    address: '1050 S Medical Dr (500 W) Brigham CityUT',
                    phone: 234985545689,
                    photo: '../../../assets/img/hos1.jpg',
                    hours: '08 am :08 pm',
                    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendreritarcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.',
                    quote: "Good health and good sense are two of life's greatest blessings",
                    facebookLink: 'https://wuzzuf.net/profile'

                },
                {
                    id: 2,
                    name: 'El Demerdash',
                    address: '500 N Medical Dr (500 W) New York',
                    phone: 31180938976,
                    photo: '../../../assets/img/hos4.jpg',
                    hours: '12 am : 12 pm',
                    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendreritarcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.',
                    quote: 'A good reputation is more valuable than money',
                    facebookLink: 'https://wuzzuf.net/profile'
                },
                {
                    id: 3,
                    name: 'Air Force',
                    address: '1320 S Medical Dr (500 W) NewCairo',
                    phone: 45682739898,
                    photo: '../../../assets/img/hos3.jpg',
                    hours: '10 am :12 pm',
                    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendreritarcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.',
                    quote: 'Each day is the scholar of yesterday',
                    facebookLink: 'https://wuzzuf.net/profile'
                },
                {
                    id: 4,
                    name: 'El Salam',
                    address: '1320 S Medical Dr (500 W) NewCairo',
                    phone: 45682739898,
                    photo: '../../../assets/img/hos11.jpg',
                    hours: '10 am :12 pm',
                    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendreritarcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.',
                    quote: 'The person who receives the most favors is the one who knows how to return them',
                    facebookLink: 'https://wuzzuf.net/profile'
                }
            ];
    };

    public getAll(): Ihospital[] {
        return this.hospitals
    }
    public getById(id: number): Ihospital {
        const i = this.hospitals.findIndex(b => b.id == id);
        return this.hospitals[i];
    }
    public add(hosp: Ihospital) {
        this.hospitals.push(hosp);
        console.log(this.hospitals);
    }
    b = false;
    setBool(b) {
        this.b = !b;
    }
    getBool(){return this.b;}
}
