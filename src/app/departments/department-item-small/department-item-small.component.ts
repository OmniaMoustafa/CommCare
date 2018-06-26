import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';
import { Idepartment } from 'src/app/shared/interfaces/idepartment';

@Component({
  selector: 'app-department-item-small',
  templateUrl: './department-item-small.component.html',
  styleUrls: ['./department-item-small.component.css']
})
export class DepartmentItemSmallComponent implements OnInit {
  @Input() department: Idepartment;
  @Input() deptIndex: number;
  
  constructor() { 
   }

  ngOnInit() {
       
  }
  
  
}
