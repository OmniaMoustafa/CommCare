import { Component, OnInit, Input } from '@angular/core';
import { IBed } from '../../shared/interfaces/IBed';
import { BedService } from '../../shared/services/bed.service';

@Component({
  selector: 'app-beds-listing',
  templateUrl: './beds-listing.component.html',
  styleUrls: ['./beds-listing.component.css']
})
export class BedsListingComponent implements OnInit {
  @Input() beds:IBed[];
  constructor( private bedservice:BedService) { }

  ngOnInit() {
    this.beds = this.bedservice.getAll();
  }

}
