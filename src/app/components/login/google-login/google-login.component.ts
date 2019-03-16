import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  // FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angular-6-social-login-v2';
import { GoogleLoginService } from 'src/app/services/login/google-login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private googleLoginService: GoogleLoginService, private router: Router,private userService:UserService,private cartService:ShoppingCartService) { }
  ngOnInit() {
  }
  public socialSignIn(socialPlatform: string) {

    let socialPlatformProvider;
    // if(socialPlatform == "facebook"){
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // }
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(userData);
        this.googleLoginService.googleVerify(userData.idToken).subscribe(data => {
          // data will be the current token trying to log in
          //data3 will be the data from the database
          console.log(data);
          if (data.email_verified == "true") {
            //Store the token for later authentication
            sessionStorage.setItem('id_token',userData.idToken);

            //When website is launched create different googleloginprovider code found in app.module
            //true validation validates the 'iss' and exp claims from the googletoken
            this.googleLoginService.checkDuplicate(data.email).subscribe(data3 => {
              if (data3 == null) { //then it is not in the database
                this.googleLoginService.googleSave(data).subscribe(data2 => {
                  if (data2.status == "success") {  }
                  sessionStorage.setItem('currentUser', JSON.stringify(data2));
                  
                  //if user data not in db, then he must be user, not admin
                  //Terry,informs header compoenent that user has changed
                  data2.role='user';
                  this.userService.addShareUser(data2);
                  this.cartService.initializeCartsFromServer();

                  
                  this.router.navigate(['/']);
                  return data;
                });
              }//end if - for storing info not in database
              else {
                if (data3.status != "blocked") {//data3 is the data in the database
                  
                  //session storing data will store the google token info
                  sessionStorage.setItem('currentUser', JSON.stringify(data3));
                      
                  
                  //Terry,informs header compoenent that user has changed
                  this.userService.addShareUser(data3);
                  //Terry update cart after logged in
                  this.cartService.initializeCartsFromServer();


                  if(data3.role=='admin'){
                   
                    this.router.navigate(['/admin-dashboard']);
                  }
                  if(data3.role=='user'){
                    this.router.navigate(['/']);
                  }
                  if(data3.role=='vendor'){
                    this.router.navigate(['/seller-dashboard']);
                  }
                } else {
                  alert("This account has been blocked....Please contact an admin at BigEnja@gmail.com");
                  this.router.navigate(['/index']);
                }
              }
              return data;
              //change to redirect to either admin, user or vendor dashboard
              //this.router.navigate(['/index']);
            });
          } else {
            console.log("Failed to verify");
          }
        });
      }
    );
  }//end of social sign in
  public socialSignOut() {
    //make a google service call to update the active status and the date of exit
    sessionStorage.removeItem('currentUser');
    //clear the token as well
    sessionStorage.removeItem('id_token');
    let newUser=new User();
    newUser.role='user';
    this.userService.addShareUser(newUser);

    //change to navigating to successful sign out page
    this.router.navigate(['/']);
    
  }

}
