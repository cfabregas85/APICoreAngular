import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../models/userInfo.model.';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly rootUrl='https://localhost:44393/api/account/Login';

  constructor(private http:HttpClient) { }

  
  login(user: UserInfo){
     console.log(user);
     return this.http.post(this.rootUrl,user)  

  }



}
