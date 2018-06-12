import { Component, OnInit, Input, Output } from '@angular/core';
import { Category } from '../../shared/interfaces/icategory';

@Component({
  selector: 'app-smallitem',
  templateUrl: './smallitem.component.html',
  styleUrls: ['./smallitem.component.css']
})
export class SmallitemComponent implements OnInit {
  @Input() category: Category;
  
  constructor() { }


  ngOnInit() {
  }

}
