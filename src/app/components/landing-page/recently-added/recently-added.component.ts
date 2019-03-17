import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { AppConfig } from 'src/app/config/app.config';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {
  public imageUrl = AppConfig.BASE_ENDPOINT+'/load-image?imageUrl=';
  constructor(private productService:ProductService,private cartService:ShoppingCartService) { }
  public recentlyAddProducts:Product[];
  public temp:Product[];
  ngOnInit() {
    let pageSize=4;
    this.productService.getProductsByAddedDate(pageSize,1).subscribe(products=>{
      this.recentlyAddProducts=products;
    });
  }

  addToCart(item){
    console.log(item);
    this.cartService.addProductToCart(item);
  }

}
