import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

//reference 
//https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
@Injectable({
    providedIn: 'root',
})
export class AuthRoleGuardService implements CanActivate {
  constructor( public router: Router,) {}
  //The canActivate method returns a boolean indicating whether or not navigation to a route should be allowed. 
  private jwtHelper:JwtHelperService=new JwtHelperService();
  canActivate(route: ActivatedRouteSnapshot): boolean {
      let token=sessionStorage.getItem('id_token');
      if(token){
      console.log('the exp date of token is');
      console.log(this.jwtHelper.getTokenExpirationDate(token));}


    if(!token){
        this.router.navigate(['auth-user']);
        console.log('##### token is not there!!!');
        return false;
    }
      //check authentication, if no token in sessionstorage or has expired, redirect to log in page
    else if(token&&this.jwtHelper.isTokenExpired(token)){
        
        console.log('##### token has expired!!!');
        this.router.navigate(['auth-user']);
        return false;
        
    }
    //check authorization, if does not meet required role, redirect to home page
    else if(route.data&&route.data.requiredRole){
        console.log('token has not expired, checking role');
        let requiredRole=route.data.requiredRole;
        let user=JSON.parse(sessionStorage.getItem('currentUser'));

        if(!requiredRole.includes(user.role)){
            this.router.navigate(['auth-user']);
            return false;
        }
    }
    return true;
  }
}