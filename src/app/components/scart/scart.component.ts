import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { CookieService } from 'ngx-cookie';
import { AppConfig } from 'src/app/config/app.config';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-scart',
  templateUrl: './scart.component.html',
  styleUrls: ['./scart.component.css']
})
export class ScartComponent implements OnInit {

  //public url = AppConfig.PRODUCT_ENDPOINT + "/image"; 
  //public url="http://localhost:4200";

  public url = AppConfig.BASE_ENDPOINT;  

  public productList:Product[] = [];

  constructor(private productService:ProductService, 
    private shoppingCartService:ShoppingCartService, 
    private _cookieService:CookieService,
    private router: Router) { }

  ngOnInit() {



    this.shoppingCartService.productObservable.subscribe(
      pProductArray=>{
        //this.productList.push(product);
        //this.productList = this.shoppingCartService.prodArray;
        this.productList = pProductArray;

      }
    );


    // Retrieve the object from storage
    //var cartObject = localStorage.getItem('cart');

    // Retrieve the object from session storage
    //var cartObject = sessionStorage.getItem('cart');

    //Retrieve the object from cookie 
    //var cartObject = this._cookieService.getObject("cart");

    //console.log("Scart getObject:");
    //console.log(cartObject);

    //var prodArr = [];
    //prodArr.push(cartObject);

    //var prodArr = JSON.parse(cartObject);
    //var prodArr = [];

    //console.log("cart:" + JSON.stringify(prodArr)); 

    //console.log('UpdateCart() - cartObject: ' + JSON.stringify(prodArr[0]) );
    //console.log('UpdateCart() - cartObject 2: ' + JSON.stringify(prodArr[0][0]) );

    //this.productList.push( prodArr[0][0] );


    /*
    this.productList = [];


    var testProd:Product = new Product();

    //prodArr[0].forEach( (p) => {

    if(typeof prodArr[0] != 'undefined' ){
      prodArr[0].forEach( (p) => {

        testProd = new Product();

      
        testProd = p;

        this.productList.push(testProd); 

      });    
      
    }*/

    //console.log("after loop:");
    //console.log(this.productList);


  }


  getCookie(key: string){
    return this._cookieService.get(key);
  }  
  

  uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }  

  clearCart(){
    this.shoppingCartService.removeAllProductsFromCart();
    this.productList = [];
  }

  removeItem(item, index){
    //alert('hi');
    //console.log(item);
    //console.log("index is: "+ index);

    // remove from global cart
    this.shoppingCartService.removeProductFromCart(item, index);

    // remove item at index
    //this.productList.splice(index, 1);

  }

  goToShoppingCartPage(){
    let element: HTMLElement = document.getElementById('side-sidebar-close-btn') as HTMLElement;
    element.click();
    this.router.navigate(['shopping-cart']);
  }


}