import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class TopVendorsService {

  constructor(private http:HttpClient) { }

  public findTopVendors():Observable<any>{
    const endpoint = AppConfig.TOP_VENDORS_ENDPOINT;
    // return this.http.get<Vendor>(endpoint);
    return this.http.get(endpoint);
  }
}
