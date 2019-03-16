import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/model/User';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private userService:UserService,private cartService:ShoppingCartService) { }

  ngOnInit() {
  }
  
  public signOut() {
    //make a google service call to update the active status and the date of exit
    sessionStorage.removeItem('currentUser');
    //clear the token as well
    sessionStorage.removeItem('id_token');
    console.log("Logging out of website...");
    //change to navigating to successful sign out page
    let user=new User();
    user.role="user";
    this.userService.addShareUser(user);
    //after loggout either call removeall or initialize function
    this.cartService.removeAllProductsFromCart();
  }
}
