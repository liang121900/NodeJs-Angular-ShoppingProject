import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { AppConfig } from 'src/app/config/app.config';
import { Review } from 'src/app/model/review';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product:Product= new Product();
  public reviews:Review[] = [];
  public rating:number;
  public review:Review;
  public url = AppConfig.BASE_ENDPOINT + "/load-image";

  constructor(private route: ActivatedRoute,private productService: ProductService,private shoppingCartService:ShoppingCartService) {

  }

  ngOnInit() {
    this.review = new Review();
    this.route.params.subscribe((params)=>{
      this.productService.getRateing(params['id']).subscribe(data=>{this.rating = data;
      console.log("the rating is:"+ this.rating)});

      this.productService.getReviewByPid(params['id']).subscribe(data=>{
        this.reviews = data;});

      this.productService.getProductByPid(params['id']).subscribe((data)=>{
        this.product = data.pop();
        if(this.product.techSpecs)
          this.product.techSpecs = JSON.parse(this.product.techSpecs+"");

      });
    });
  }

  addReview():void{
    //difine a user...
    var user = JSON.parse(sessionStorage.getItem('currentUser'));
    if(user){
          this.review.id = this.product.pid + user.email;
          this.review.pid = this.product.pid;
          this.review.cid = user.email;
    //console.log(this.review);
          this.productService.saveReview(this.review).subscribe(data=>{
          if(data.status == "success"){
            this.reviews.push(this.review);
            this.review = new Review();
            
          }else{
            console.log("couldnt save review");
          }
    });
    }
 
  }
  
  addToCart(item){ // should take product as parameter , not take id
    this.shoppingCartService.addProductToCart(item); // testProd
  }
}