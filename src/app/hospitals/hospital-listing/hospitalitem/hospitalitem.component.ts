import { Component, OnInit,Input } from '@angular/core';
import { Ihospital } from '../../../shared/interfaces/ihospital';

@Component({
  selector: 'app-hospitalitem',
  templateUrl: './hospitalitem.component.html',
  styleUrls: ['./hospitalitem.component.css']
})
export class HospitalitemComponent implements OnInit {
  @Input() hospital:Ihospital;
  constructor() { 
    this.hospital ={};
  }

  ngOnInit() {
  }

}
