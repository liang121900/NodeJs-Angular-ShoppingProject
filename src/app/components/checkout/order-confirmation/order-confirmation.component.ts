import { Component, OnInit, Input } from '@angular/core';
import { OrderPlacedDetials } from 'src/app/model/checkoutModels/orderPlacedDetails';
import { Product } from 'src/app/model/product';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  @Input("order")
  private orderPlacedDetails:OrderPlacedDetials;

  @Input("products")
  private productList:Product[]=[];
  public url = AppConfig.BASE_ENDPOINT;  

  constructor() { }

  ngOnInit() {
  }

}
