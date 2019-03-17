import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import * as Rx from "rxjs";
import { CookieService } from 'ngx-cookie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../config/app.config';
import { OrderPlacedDetials } from '../model/checkoutModels/orderPlacedDetails';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private behaviorSubject = new Rx.BehaviorSubject<Product[]>([]);
  productObservable = this.behaviorSubject.asObservable();

  public prodArray:Product[] = [];

 
  

/*
     //difine a user...
     var user = JSON.parse(sessionStorage.getItem('currentUser'));
     if(user){
           this.review.id = this.product.pid + user.email;
           this.review.pid = this.product.pid;
           this.review.cid = user.e mail;
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

*/
  constructor(private _cookieService:CookieService,private http:HttpClient) { } 





  public checkout(orderPlacedDetails:OrderPlacedDetials){
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post(AppConfig.CHECKOUT_ENDPOINT, orderPlacedDetails, httpOptions);
  }


  public saveCheckoutProducts(aproduct: Product[]){
    //console.log("save checkout products");
    //console.log(aproduct);

    this._cookieService.remove('checkoutCart');
    this._cookieService.putObject("checkoutCart", aproduct );
  }

  
  public addProductToCart(pproduct: Product) {

    //console.log("this.prodArray");
    //console.log(this.prodArray);

    var found = this.prodArray.some(function (el) {
      return el.pid === pproduct.pid;
    });    

    if(found){
      console.log("is duplicate already!");
      // to do: increment qty
    }
    else{
      console.log("not a duplicate");

      this.prodArray.push(pproduct);
      this.behaviorSubject.next(this.prodArray);
    //Terry update the cart items to the server if current user has logged in 
      this.updateCart();
    
    
      //var itemsInCart = JSON.parse(localStorage.getItem("cart"));
      //var itemsInCart = JSON.parse(sessionStorage.getItem('cart'));

      //var itemsInCart = this._cookieService.getObject("cart");

      //if(itemsInCart == null) itemsInCart = [];
      //itemsInCart = [];
      //itemsInCart.push(this.prodArray); 

      // Put the array into local storage
      //localStorage.setItem("cart", JSON.stringify(itemsInCart));

      // Put the array into session storage
      //sessionStorage.setItem("cart", JSON.stringify(itemsInCart));

      // Put the array into cookie
      this._cookieService.putObject("cart", this.prodArray);

      var itemsInCart = this._cookieService.getObject("cart");
      console.log("service - getObject: ");
      console.log(itemsInCart);
     
    }

  }

  /*
  public getAllProducts(){
    return this.prodArray;
  }
  */

  removeAllProductsFromCart(){
    this.prodArray = [];
    this.behaviorSubject.next(this.prodArray);
    this._cookieService.remove("cart");
    this._cookieService.remove("checkoutCart");    
    //Terry update cart on server side
    this.updateCart();

  }

  removeProductFromCart(item, index){

    console.log(item);
    console.log("index is: "+ index);

    this.prodArray.splice(index, 1);    


    //var itemsInCart = JSON.parse(localStorage.getItem("cart"));
    //var itemsInCart = JSON.parse(sessionStorage.getItem('cart'));
    let itemsInCart = [];
    if(this._cookieService.getObject("cart")){
        itemsInCart.push(this._cookieService.getObject("cart"));
    }

    console.log("service - items in cart:");
    console.log(itemsInCart);
    if(itemsInCart.length>0){
      itemsInCart[0].splice(index, 1);
    }
    console.log("service - after splice:");
    console.log(itemsInCart[0]);

    //if(itemsInCart == null) itemsInCart = [];
    //itemsInCart = [];
    //itemsInCart.push(this.prodArray); 

    this.prodArray = itemsInCart[0];

    this.behaviorSubject.next(this.prodArray);

    // Put the array into local storage
    //localStorage.setItem("cart", JSON.stringify(itemsInCart));

    // Put the array into session storage
    //sessionStorage.setItem("cart", JSON.stringify(itemsInCart));

    // Put the array into cookie
    this._cookieService.putObject("cart", itemsInCart[0] );    
    //Terry update cart on server side
    this.updateCart();
  }


  public initializeCartsFromServer() {
    //empty the cart
    this.prodArray = [];
    this.behaviorSubject.next(this.prodArray);
    this._cookieService.remove("cart");
    this._cookieService.remove("checkoutCart");    


    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    //get the products in the cart of current user stored in db and add them to cart
    if (currentUser&&currentUser.username) { 
      let url = AppConfig.BASE_ENDPOINT + '/users/' + currentUser.username + '/carts';
      this.http.get<any>(url).subscribe(products => {
        if(products.length>0){
        this.prodArray = products;
        }
        this.behaviorSubject.next(this.prodArray);
        this.prodArray.forEach(product=>{
          this.addProductToCart(product);
        });
      });
    }
  }


//Terry update cart to server if logged in
 public  updateCart() {

    //Terry update the cart items to the server if current user has logged in and cart items have changed
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser) {
      let url = AppConfig.BASE_ENDPOINT + '/users/' + currentUser.username + '/carts';
       this.http.put(url, this.prodArray).subscribe(next => {
      });
    }
  
}

public findCart(cartId){
  let url = AppConfig.BASE_ENDPOINT + '/carts/'+cartId;
  return this.http.get<any>(url);
}

public clearCartByEmail(email){
  this.http.delete(AppConfig.BASE_ENDPOINT + '/users/' + email + '/carts').subscribe(next=>{});
}

}
