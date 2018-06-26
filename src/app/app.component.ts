import { Component,OnInit } from '@angular/core';
import { HospitalService } from 'src/app/shared/services/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ishospital;
  id:number;
  title = 'app';
    constructor(private hosService:HospitalService,private activatedRoute:ActivatedRoute) { }
  
    ngOnInit() {
      this.id=this.activatedRoute.snapshot.params["id"];
        console.log(this.id);
        if(this.id)
        {
          this.ishospital=true;
        }
        else
        {
          this.ishospital=false;
        }
      }
}

