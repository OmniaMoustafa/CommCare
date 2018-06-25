import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    var topnav = document.getElementById("topnav");
    window.addEventListener('scroll',function(){topnav.style.display="none" ;topnav.style.transition="ease-out 1s";});
    if(window.scrollTo(0,0)){
      topnav.style.display="block";
    }
  }

}
