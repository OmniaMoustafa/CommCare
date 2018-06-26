import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  const id =this.activatedRoute.snapshot.params['id'];
  console.log("home header"+id)
   }

  ngOnInit() {
    var topnav = document.getElementById("topnav");
    window.addEventListener('scroll',function(){topnav.style.display="none" ;topnav.style.transition="ease-out 1s";});
    if(window.scrollTo(0,0)){
      topnav.style.display="block";
    }
  }

}
