import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {

  loginData : any;

  constructor(public http: Http) {
    console.log('Hello AuthenticationServiceProvider Provider');
    this.loginData = null;
  }

  isLogedIn()
  {

   var userID = window.localStorage.getItem('userID');
   var emailID =  window.localStorage.getItem('emailID');

   console.log(userID + " " + emailID);

   if(userID)
    return true;
   else 
    return false;
  }

  userLoginRequest(userId,password)
  {
    if (this.loginData) {
      return Promise.resolve(this.loginData);
    }
 
    var userDataParam = {userId:userId,password:password};
    
    return new Promise(resolve => {
      this.http.post('http://alice.softdotcom.in:2222/login/user',userDataParam)
        .map(res => res.json())
        .subscribe(data => {
          this.loginData = data;
          resolve(this.loginData);
        });
    });
  }
}