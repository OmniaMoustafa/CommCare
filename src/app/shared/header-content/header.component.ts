import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    window.addEventListener('scroll', function () {
      topnav.style.transition = "ease-out 1s";
      if (window.scrollY == 0) {
        topnav.style.display = "block";
      }
      else {
        topnav.style.display = "none";
      }
    });
  }

}
