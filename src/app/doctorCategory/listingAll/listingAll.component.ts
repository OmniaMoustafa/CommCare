import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/interfaces/icategory';
import { DoctorcategoryService } from '../../shared/services/doctorcategory.service';

@Component({
  selector: 'app-listingAll',
  templateUrl: './listingAll.component.html',
  styleUrls: ['./listingAll.component.css']
})
export class ListingAllComponent implements OnInit {
  categories:Category[];
  constructor(private categoryservice:DoctorcategoryService) {
    this.categories=categoryservice.getAll();
   }

  ngOnInit() {
  }

}
