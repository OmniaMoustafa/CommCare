import {Injectable} from '@angular/core';
import {Ihospital} from 'src/app/shared/interfaces/ihospital';

@Injectable()
export class HospitalService{
   private hospitals:Ihospital[];
    constructor(){
        this.hospitals=
        [
            {
                id:1,
                name:'El Gala',
                address:'1050 S Medical Dr (500 W) Brigham CityUT',
                phone:234985545689,
                photo:'../../../assets/img/hospital1.jpg',
                hours:'08 am :08 pm',
                description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendreritarcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.'
            },
            {
                id:2,
                name:'El Demerdash',
                address:'500 N Medical Dr (500 W) New York',
                phone:31180938976,
                photo:'../../../assets/img/hospital2.jpg',
                hours:'12 am : 12 pm',
                description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendreritarcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.'
            },
            {
                id:3,
                name:'Air Force',
                address:'1320 S Medical Dr (500 W) NewCairo',
                phone:45682739898,
                photo:'../../../assets/img/hospital3.jpg',
                hours:'10 am :12 pm',
                description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendreritarcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.'
            },
            {
                id:4,
                name:'El Salam',
                address:'1320 S Medical Dr (500 W) NewCairo',
                phone:45682739898,
                photo:'../../../assets/img/hospital4.jpg',
                hours:'10 am :12 pm',
                description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendreritarcu, ac tincidunt mauris lacus sed leo. vamus suscipit molestie vestibulum.'
            }
        ];
    };

    public getAll():Ihospital[] {
        return this.hospitals
    }
}