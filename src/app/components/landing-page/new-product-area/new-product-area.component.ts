import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/model/product';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-new-product-area',
  templateUrl: './new-product-area.component.html',
  styleUrls: ['./new-product-area.component.css']
})
export class NewProductAreaComponent implements OnInit {
  @ViewChild('content') private shareForm;
  private trendingProducts:Product[]=[];
  private hotDealsProducts:Product[]=[];
  private sharingProduct:Product=new Product();
  public url = AppConfig.BASE_ENDPOINT;  
  public showShareForm:boolean=false;
  public sharingEmail:String;
  public sharingResponse:String;
  constructor(private productService:ProductService,private shoppingCartService:ShoppingCartService,private modalService: NgbModal) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>{
      var products1=products;
      this.sortByRatings(products);
      this.sortByDiscount(products1);
    });

  }

  public sortByRatings(products) {
    products.sort(function(a, b){
      return b.ratings-a.ratings;
    });
    
    for (var i=0; i<6; ++i) {
      this.trendingProducts[i]=products[i];
    }
  }

  public sortByDiscount(products) {
    products.sort(function(a, b){
      return (a.price/a.sprice)-(b.price/b.sprice);
    });
    
    for (var i=0; i<6; ++i) {
      this.hotDealsProducts[i]=products[i];
    }
  }

  // testnum
  addToCart(item){ // should take product as parameter , not take id


    // dummy data
    /*
    var testProd:Product = new Product();

    console.log(testnum);

    if(testnum == 1){

    testProd.pid = "PAAA";
    testProd.title = "Test Product Title";
    testProd.price = 500;
    testProd.sprice = 350;
    testProd.imageURL = "assets/img/recent-review/02.jpg";

    }else if(testnum == 2){

      testProd.pid = "YZZZ";
      testProd.title = "A Nice Hat";
      testProd.price = 900;
      testProd.sprice = 50;      
      testProd.imageURL = "assets/img/recent-review/03.jpg"
    }
    */


    this.shoppingCartService.addProductToCart(item); // testProd

    


  }


  public showForm(product){
    this.sharingProduct=product;
    this.sharingEmail="";
    this.sharingResponse="";
    this.modalService.open(this.shareForm);

  }

  public shareProduct(){
    this.productService.shareProduct(this.sharingProduct,this.sharingEmail).subscribe(res=>{
      this.sharingResponse="Sharing link has been sent.";
    });
  }
}
