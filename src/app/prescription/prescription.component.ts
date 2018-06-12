import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // document.getElementById('edit-row').addEventListener('click', ( ) => {
    // const newMed = document.getElementById('medicine-addedonce');
    //  const node = document.createElement('h2');
    //  const textnode = document.createTextNode('hello');
    //  node.appendChild(textnode);
    //  document.getElementById('medicine-addedonce').appendChild(node);
    //  document.getElementById('medicine-addedonce');
    // document.getElementById('edit-row').addEventListener('click', function () {
    //   const newMed = document.getElementById('medicine-addedonce');
    //   const newDiv = document.createElement('div');
    //   newDiv.appendChild(newMed);
    // });

  }

  onPlusClick(ele) {
    console.log(ele);
  }

}
