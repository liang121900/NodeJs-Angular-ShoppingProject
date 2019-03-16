import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';
import { Vendor } from '../model/vendor';
import { SaveLater } from '../model/savelater';

@Injectable({
  providedIn: 'root'
})
export class SavelaterService {

  constructor(private http: HttpClient) { }

  //public addVendor(vendor:Vendor):Observable<any>{
    public addSaveLater(saveLater:SaveLater):Observable<any>{  
      console.log("----- Save Later - service layer method is called!!!!!!!!!!!");
      console.log(saveLater);
      const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      const endpoint = AppConfig.SAVELATER_ENDPOINT;
      
      //return this.http.post(endpoint,vendor,httpOptions);
  
      let formdata: FormData = new FormData();
      //formdata.append('sid', saveLater.sid+"");
      formdata.append('cid', saveLater.cid+'');
      formdata.append('products', saveLater.products+'');

      console.log('saveLater.products');
      console.log(saveLater.products);

      console.log("endpoint: " + endpoint)

      //this.http.post(endpoint,vendor,httpOptions);
      //below code no need to remember.................................
      const req = new HttpRequest('POST', endpoint, formdata, {
        reportProgress: true,
        responseType: 'text'
      });
      return this.http.request(req);
      
  
    }

    public findSaveForLaterLists():Observable<SaveLater>{
      const endpoint = AppConfig.SAVELATER_ENDPOINT;
      console.log("findSaveForLaterLists");
      // return this.http.get<Vendor>(endpoint);
      return this.http.get<SaveLater>(endpoint);
    }

    public findSaveForLaterByCid(cid):Observable<SaveLater>{
      const endpoint = AppConfig.SAVELATER_ENDPOINT+'/'+cid;
      console.log("findSaveForLaterByCid");
      console.log(cid);
      // return this.http.get<Vendor>(endpoint);
      return this.http.get<SaveLater>(endpoint);
    }
  

    // uriMapping.put("/profiles",ProfileController.editProfile);
    public editSaveForLater(saveLater:SaveLater,id):Observable<any>{
      console.log("-----EDIT SaveForLater: service layer method is called!!!!!!!!!!!");
      console.log(saveLater);
      const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
      const endpoint = AppConfig.SAVELATER_ENDPOINT;
      //const endpoint = 'http://localhost:4000/v3/admin/ssavelater'; 
  
      //return this.http.put(endpoint,vendor,httpOptions);
  
      let formdata: FormData = new FormData();
      formdata.append('cid', saveLater.cid+'');
      formdata.append('products', saveLater.products+'');

      //this.http.post(endpoint,vendor,httpOptions);
      //below code no need to remember.................................
      //PUT
      const req = new HttpRequest('PUT', endpoint, formdata, {
        reportProgress: true,
        responseType: 'text'
      });
      return this.http.request(req);
  
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
      const endpoint = AppConfig.VENDOR_ENDPOINT;
  
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
      //PUT
      const req = new HttpRequest('POST', endpoint, formdata, {
        reportProgress: true,
        responseType: 'text'
      });
      return this.http.request(req);
  
    }

}
