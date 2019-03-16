import { Component, OnInit,Input,ViewChild, } from '@angular/core';
import { Product } from 'src/app/model/product';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/config/app.config';
@Component({
  selector: 'app-share-form',
  templateUrl: './share-form.component.html',
  styleUrls: ['./share-form.component.css']
})
export class ShareFormComponent implements OnInit {
  modalReference=null;
  @ViewChild('content') private shareForm;
  @Input('product') sharingProduct:Product;
  constructor(private modalService: NgbModal) { }
  private  product:Product;
  public url = AppConfig.BASE_ENDPOINT;  
  ngOnInit() {

  }

//when input product has changed, prompt the share form
  @Input('showForm') set toggleShareProduct(showForm: boolean) {
    if(showForm)
      this.modalReference=this.modalService.open(this.shareForm);
 }

}