import { Component, OnInit } from '@angular/core';
import { Ihospital } from '../../../shared/interfaces/ihospital';
import { HospitalService } from '../../../shared/services/hospital.service';

@Component({
  selector: 'app-hospitalitem',
  templateUrl: './hospitalitem.component.html',
  styleUrls: ['./hospitalitem.component.css']
})
export class HospitalitemComponent implements OnInit {
  public hospitals:Ihospital[];
  constructor(private hospitalservice : HospitalService) { 
    
  }

  ngOnInit() {
    this.hospitals=this.hospitalservice.getAll();
  }

}
