import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { Vendor } from '../model/vendor';
import { WishList } from '../model/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService { 

  constructor(private http: HttpClient) { }

  //public addVendor(vendor:Vendor):Observable<any>{
    public addWishList(wishList:WishList):Observable<any>{  
      console.log("----- Wish List - service layer method is called!!!!!!!!!!!");
      console.log(wishList);
      const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      const endpoint = AppConfig.WISHLIST_ENDPOINT;
      //return this.http.post(endpoint,vendor,httpOptions);
  
      let formdata: FormData = new FormData();
      formdata.append('wid', wishList.wid+"");
      formdata.append('cid', wishList.cid+'');
      formdata.append('products', wishList.products+'');

      console.log('wishList.products');
      console.log(wishList.products);

      //this.http.post(endpoint,vendor,httpOptions);
      //below code no need to remember.................................
      const req = new HttpRequest('POST', endpoint, formdata, {
        reportProgress: true,
        responseType: 'text'
      });
      return this.http.request(req);
  
    }

    public findWishLists():Observable<WishList>{
      const endpoint = AppConfig.WISHLIST_ENDPOINT;
      console.log("findWishLists");
      // return this.http.get<Vendor>(endpoint);
      return this.http.get<WishList>(endpoint);
    }    

    public findWishListByCid(cid):Observable<WishList>{
      const endpoint = AppConfig.WISHLIST_ENDPOINT+'/'+cid;
      console.log("findWishListByCid");
      console.log(cid);
      // return this.http.get<Vendor>(endpoint);
      return this.http.get<WishList>(endpoint);
    }

    // uriMapping.put("/profiles",ProfileController.editProfile);
    public editWishList(wishList:WishList,id):Observable<any>{
      console.log("-----EDIT editSaveForLater: service layer method is called!!!!!!!!!!!");
      console.log(wishList);
      const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      const endpoint = AppConfig.WISHLIST_ENDPOINT;
      //const endpoint = 'http://localhost:4000/v3/admin/ssavelater'; 
  
      //return this.http.put(endpoint,vendor,httpOptions);
  
      let formdata: FormData = new FormData();
      formdata.append('cid', wishList.cid+'');
      formdata.append('products', wishList.products+'');

      //this.http.post(endpoint,vendor,httpOptions);
      //below code no need to remember.................................
      //PUT
      const req = new HttpRequest('PUT', endpoint, formdata, {
        reportProgress: true,
        responseType: 'text'
      });
      return this.http.request(req);
  
    }        




}



