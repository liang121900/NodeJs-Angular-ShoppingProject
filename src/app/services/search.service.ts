import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  public getsearchProduct():Observable<any>{
    console.log("from search service layer");
    const endpoint=AppConfig.SEARCH_ENDPOINT;
    console.log("from search service");
    console.log(endpoint);
    return this.http.get(endpoint);
  }

  public getsortOrders(sprice:string):Observable<number>{
    console.log("########");
    const endpoint=AppConfig.SEARCH_ENDPOINT+'/'+sprice+'/sprice';
    return this.getsortOrders(endpoint);
  }
}


