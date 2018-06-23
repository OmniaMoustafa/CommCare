import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-menu',
  templateUrl: './system-menu.component.html',
  styleUrls: ['./system-menu.component.css']
})
export class SystemMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goto(location:string):void{
    window.location.hash = '';
    window.location.hash = location;
  }

}
