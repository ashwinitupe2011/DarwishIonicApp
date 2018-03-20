import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';
import { TabsPage } from '../tabs/tabs';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public backgroundImage = 'assets/imgs/background-1.jpg';
  password: string;
  username:string;

  loginResponse : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public authService:AuthenticationServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {
    this.authService.userLoginRequest(this.username,this.password).then(data => {
      this.saveLoginData(data);
      console.log("data "+data);
      });

      this.callPageValidation();
    }

    saveLoginData(data)
    {
      this.loginResponse = data;

      window.localStorage.setItem('userID',this.loginResponse.responseData.response.userId);
      window.localStorage.setItem('emailID',this.loginResponse.responseData.response.emailId);

      console.log("userId "+ window.localStorage.getItem('userID'));
      console.log("emailID "+ window.localStorage.getItem('emailID'));
    }

    callPageValidation()
    {
      console.log("status " +this.loginResponse.status);
      if(this.loginResponse.status == 200)
      {
       this.navCtrl.push(TabsPage);
      }
      else{
          alert("this.loginResponse.responseData.message");
      }
    }
}
