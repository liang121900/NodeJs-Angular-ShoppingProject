import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { CookieService } from 'ngx-cookie';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public productList:Product[] = [];  
  public itemsInCart = 0;
  public status:String;
  public isUser:boolean;
  public isAdmin:boolean;
  public currentUser:User;
  
  constructor(private shoppingCartService:ShoppingCartService,private _cookieService:CookieService,private userService:UserService) { }

  ngOnInit() {
    this.status = 'active';
    this.isUser = true;
    this.isAdmin = false;
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    //console.log(this.currentUser);

    if(this.currentUser != null){
      if(this.currentUser.role=='admin'){
        this.isUser = false;
        this.isAdmin = true;
      }
      this.status = 'active';
    }
    //Terry subsribe to changing of user
    this.userService.observableUser.subscribe(user=>{
      console.log(user);
        this.currentUser=user;
        if(this.currentUser.role=='admin'){
          this.isUser = false;
          this.isAdmin = true;
          this.status='active';
          //if log in not admin, active status
        }else if(this.currentUser.username){
          
          this.status='active'
          this.isUser = true;
          this.isAdmin = false;
          //if not loged in, inactive status
        }else{
          this.status='inactive'
          this.isUser = true;
          this.isAdmin = false;
        }

    });

    this.shoppingCartService.productObservable.subscribe(
      pProductArray=>{
        
        this.itemsInCart = pProductArray.length;

      }
    );


    // Retrieve the object from storage
    //var cartObject = localStorage.getItem('cart');
    //var cartObject = sessionStorage.getItem('cart');

    //Terry, instead of fetching cartitems from cookies, fetch from
   // var cartObject = this._cookieService.getObject("cart");

    //var prodArr = JSON.parse(cartObject);
    var prodArr = [];
    //prodArr.push(cartObject);
    
    
    
    /*
    if(typeof prodArr[0] != 'undefined' ){
      this.itemsInCart = prodArr[0].length;
    }
    else{
      this.itemsInCart = 0; 
    }

    */
  }

}
