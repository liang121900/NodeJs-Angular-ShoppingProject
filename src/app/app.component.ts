import { Component,OnInit } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';
import { User } from './model/User';
import { UserService } from './services/user/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'synergy-shop-store';
  public currentUser=new User();

  constructor(private cartService:ShoppingCartService,private userService:UserService) { }

  ngOnInit() {

    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    //set default role as user if no user stored in sessionStorage
    if(!this.currentUser){
      this.currentUser=new User();
      this.currentUser.role='user';
    }
    this.userService.addShareUser(this.currentUser);
        //Terry load carts from current user initially
    this.cartService.initializeCartsFromServer();
  }
}