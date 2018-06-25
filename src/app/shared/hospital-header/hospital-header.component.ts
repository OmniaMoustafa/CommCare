import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { element } from 'protractor';
import { elementStyle } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-hospital-header',
  templateUrl: './hospital-header.component.html',
  styleUrls: ['./hospital-header.component.css']
})

export class HospitalHeaderComponent implements OnInit {
  @ViewChild('topnav')topnav:TemplateRef<any>;
  constructor() { }

  ngOnInit() {
    var topnav = document.getElementById("topnav");
    window.addEventListener('scroll',function(){topnav.style.display="none" ;topnav.style.transition="ease-out 1s";});
    // var body = document.body; //IE 'quirks'
    // var ddocument = document.documentElement; //IE with doctype
    // ddocument = (ddocument.clientHeight) ? ddocument : body;

    // if (ddocument.scrollTop == 0) {
    //     alert("top");
    // }  
  }

}
