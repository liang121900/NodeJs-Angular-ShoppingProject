import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  constructor(private http: HttpClient) { }
  
  public googleVerify(userToken):Observable<any>{
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.GOOGLE_TOKEN_ENDPOINT+userToken;
    return this.http.get(endpoint);
  }

  public googleSave(userToken):Observable<any>{
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    const endpoint = AppConfig.GOOGLELOGIN_ENDPOINT;
    return this.http.post(endpoint,userToken,httpOptions);
  }

  public checkDuplicate(username):Observable<any> {
    const endpoint = AppConfig.USERS_ENDPOINT;
    return this.http.get(endpoint+"?username="+username);
  }
}
