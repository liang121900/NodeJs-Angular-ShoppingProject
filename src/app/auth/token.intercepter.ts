//reference
//https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
//https://blog.angular-university.io/angular-jwt-authentication/

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class TokenInterceptor  implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
        //do not add the token to header if the request is for google login, otherwise might get 
        //"access to xmlhttprequest has been blocked by cors policy"
        if(req.url.includes('https://www.googleapis.com/oauth2/v3/tokeninfo')){
            return next.handle(req)
        }

        const idToken = sessionStorage.getItem("id_token");
        //if token is availabe, add it to the header
        if (idToken) {
            const newReq = req.clone({
                headers: req.headers.set("user-access-token",
                    idToken)
            });

            return next.handle(newReq);
        }
        else {
            return next.handle(req);
        }
    }
}