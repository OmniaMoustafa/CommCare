import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/icategory'

@Injectable({
  providedIn: 'root'
})
export class DoctorcategoryService {
  private categories: Category[];

  constructor() {
    this.categories = [
      {
        id: 1,
        categoryname: 'Internist'
      },
      {
        id: 2,
        categoryname: 'Dentist'
      },
      {
        id: 3,
        categoryname: 'Dermatologist'
      },
      {
        id: 4,
        categoryname: 'physiatrist'
      },
      {
        id: 5,
        categoryname: 'neurologist'
      },
      {
        id: 6,
        categoryname: 'Orthopedist'
      },
      {
        id: 7,
        categoryname: 'Nutritionist'
      },
      {
        id: 8,
        categoryname: 'Urologist'
      },
      {
        id: 9,
        categoryname: 'Radiology center'
      },
      {
        id: 10,
        categoryname: 'Plastic Surgeon'
      }


    ];
  }
  public getAll(): Category[] {

    return this.categories;
  }
  public getById(id: number): Category {
    const i = this.categories.findIndex(b => b.id == id);
    return this.categories[i];
   }


 

}