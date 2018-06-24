import { Component,OnInit } from '@angular/core';
import { HospitalService } from 'src/app/shared/services/hospital.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ishospital = this.hosService.getBool();
  title = 'app';
    constructor(private hosService:HospitalService) { }
  
    ngOnInit() {
    }

  
}
