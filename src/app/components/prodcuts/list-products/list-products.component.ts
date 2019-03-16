import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {
  constructor(private productService:ProductService) {}

  products:Product[];
  fillstar:number[] = [3,3,3];
  emptystar:number[] = [3,3];
  url = AppConfig.PRODUCT_ENDPOINT + "/image";
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    }); 
  }

  setRatings(ratings:number):void{
    this.fillstar = Array(ratings).fill(ratings);
    if(ratings < 5){
      this.emptystar = Array(5-ratings).fill(5-ratings);
    }
    
  }
  testFuct():string{
    return 'test';
  }
}