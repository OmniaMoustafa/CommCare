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
        categoryname: 'dentistdoctor'
      },
      {
        id: 3,
        categoryname: 'Dermatologist'
      },
      {
        id: 4,
        categoryname: 'Batna'
      },
      {
        id: 5,
        categoryname: '3elag tabe3y'
      },
      {
        id: 6,
        categoryname: 'Bones'
      },
      {
        id: 7,
        categoryname: 'asha3a'
      },
      {
        id: 8,
        categoryname: 'anf w azon'
      },
      {
        id: 9,
        categoryname: '3yooun'
      },
      {
        id: 10,
        categoryname: 'atfaal'
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