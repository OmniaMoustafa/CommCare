import { Component,OnInit } from '@angular/core';
import { HospitalService } from 'src/app/shared/services/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //ishospital = false;

  ishospital = this.hosService.getBool();
  

  title = 'app';
    constructor(private hosService:HospitalService, private activatedRoute: ActivatedRoute) { 
    }   
    
    ngOnInit() {
      let id;
      this.activatedRoute.queryParams.subscribe(
        (params) => { 
          id = params["id"];
          console.log(`id : ${id}`);
          if(id){
            this.ishospital=true;
          }
          else{
            this.ishospital=false;
          }
        }
      );
      
     
    }

  
}
