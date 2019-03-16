import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../model/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-cell',
  templateUrl: './product-details-cell.component.html',
  styleUrls: ['./product-details-cell.component.css']
})
export class ProductDetailsCellComponent implements OnInit {

  @Input("productItem")
  public productDetails:Product;



  constructor(private shoppingCartService:ShoppingCartService, private productService:ProductService) { }

  ngOnInit() {
  }

  // testnum
  addToCart(item){ // should take product as parameter , not take id


    // dummy data
    /*
    var testProd:Product = new Product();

    console.log(testnum);

    if(testnum == 1){

    testProd.pid = "PAAA";
    testProd.title = "Test
    testProd.price = 500;
    testProd.sprice = 350
    testProd.imageURL = "assets/img/recent-review/02.jpg";

    }else if(testnum == 2){

      testProd.pid = "YZZZ";
      testProd.title = "A Nice Hat";
      testProd.price = 900;
      testProd.sprice = 50;      
      testProd.imageURL = "assets/img/recent-review/03.jpg"
    }
    */

    console.log("add To Cart:");
    console.log(item);

    this.shoppingCartService.addProductToCart(item); // testProd

    


  }


}
