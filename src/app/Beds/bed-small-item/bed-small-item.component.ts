import { Component, OnInit, Input } from '@angular/core';
import { IBed } from '../../shared/interfaces/IBed';
import {  TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-bed-small-item',
  templateUrl: './bed-small-item.component.html',
  styleUrls: ['./bed-small-item.component.css']
})
export class BedSmallItemComponent implements OnInit {
  @Input() bed:IBed;
  modalRef: BsModalRef;
  constructor( private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }

}
