import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { Vendor } from '../model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }
  
  //public addVendor(vendor:Vendor):Observable<any>{
  public addVendor(vendor:Vendor,selectedFile :File):Observable<any>{  
    console.log("-----service layer method is called!!!!!!!!!!!");
    console.log(vendor);
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.VENDOR_ENDPOINT;
    //return this.http.post(endpoint,vendor,httpOptions);

    let formdata: FormData = new FormData();
    formdata.append('vcode', vendor.vcode+"");
    formdata.append('name', vendor.name+'');
    formdata.append('email', vendor.email+'');
    formdata.append('mobile', vendor.mobile+'');
    formdata.append('comment', vendor.comment+'');
    formdata.append('address', vendor.address+'');
    
    formdata.append('photo', selectedFile);

    //this.http.post(endpoint,vendor,httpOptions);
    //below code no need to remember.................................
    const req = new HttpRequest('POST', endpoint, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);

  }

  public findVendorByVcode(vcode:string):Observable<Vendor> {
    var endpoint = AppConfig.VENDOR_ENDPOINT+'/vcode/'+vcode;
    return this.http.get<Vendor>(endpoint);
}
  

  public findVendors():Observable<Vendor[]>{
    const endpoint = AppConfig.VENDOR_ENDPOINT;
    // return this.http.get<Vendor>(endpoint);
    return this.http.get<Vendor[]>(endpoint);
  }

  public deleteVendor(id):Observable<any>{
    console.log("-----DELETE VENDOR: service layer method is called!!!!!!!!!!!");
    console.log(id);
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.VENDOR_ENDPOINT+'/'+id;
    console.log("endpoint:");
    console.log(endpoint);
    return this.http.delete(endpoint);
  }

  // uriMapping.put("/profiles",ProfileController.editProfile);
  public editVendor(vendor:Vendor,selectedFile :File, id):Observable<any>{
    console.log("-----EDIT VENDOR: service layer method is called!!!!!!!!!!!");
    console.log(vendor);
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.VENDOR_ENDPOINT+'/'+id;;

    //return this.http.put(endpoint,vendor,httpOptions);

    let formdata: FormData = new FormData();
    formdata.append('vcode', vendor.vcode+"");
    formdata.append('name', vendor.name+'');
    formdata.append('email', vendor.email+'');
    formdata.append('mobile', vendor.mobile+'');
    formdata.append('comment', vendor.comment+'');
    formdata.append('address', vendor.address+'');
    
    formdata.append('photo', selectedFile);

    //this.http.post(endpoint,vendor,httpOptions);
    //below code no need to remember.................................
    const req = new HttpRequest('PUT', endpoint, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);

  }

}
