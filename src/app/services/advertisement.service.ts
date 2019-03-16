import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advertisement } from '../model/advertisement';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  endpoint:string=AppConfig.ADVERTISEMENT_ENDPOINT;
  
  constructor(private http:HttpClient) { }

  public findAdById(adId):Observable<any> {
    return this.http.get(this.endpoint+"?adId="+adId);
  }

  public editAd(ad:Advertisement, image:File):Observable<any> {
    var formData= new FormData();
    formData.append("adId", ad.adId+"");
    formData.append("title", ad.title+"");
    formData.append("orgPrice", ad.orgPrice+"");
    formData.append("discountPrice", ad.discountPrice+"");
    formData.append("endDate", ad.endDate+"");
    formData.append("startDate", ad.startDate+"");
    formData.append("description", ad.description+"");
    formData.append("imageUrl", image);
    formData.append("subtitle", ad.subtitle+"");
    formData.append("productId", ad.productId+"");

    console.log(image);
    const req = new HttpRequest('POST', this.endpoint, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
}
