import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/shared/services/hospital.service';
import { Ihospital } from 'src/app/shared/interfaces/ihospital';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  hospital:Ihospital={};
  constructor(private hosService:HospitalService) { }

  ngOnInit() {
  }

}
