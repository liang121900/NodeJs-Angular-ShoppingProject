import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppConfig} from '../config/app.config';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { ProductRating } from '../model/rating';
@Injectable({
  providedIn: 'root'
})
export class FeaturedService {
  //rating:ProductRating;
  constructor(private http:HttpClient) { }

  public getfeaturedProduct():Observable<any>{
    //console.log("service layer is called");
    
    const endpoint=AppConfig.FEATURED_ENDPOINT;
    return this.http.get(endpoint);

  }
  public getRateing(pid:string):Observable<number>{
    const endpoint = AppConfig.PRODUCT_ENDPOINT + '/' + pid + '/rating';
    return this.http.get<number>(endpoint);
  }
}
  