import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';
import { TabsPage } from '../tabs/tabs';
import { Events } from 'ionic-angular';


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

  // public backgroundImage = 'assets/imgs/background-1.jpg';
  public backgroundImage = 'assets/imgs/back1.jpg';
  
  password: string;
  username:string;

  loginResponse : any;

  constructor(public navCtrl: NavController, public events: Events,public navParams: NavParams,public http:HttpClient,public authService:AuthenticationServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {
    this.events.publish('loader:dismiss');
    if(this.username && this.password)
    {
      this.authService.userLoginRequest(this.username,this.password).then(data => {
      this.events.publish('loader:presented');
      this.saveLoginData(data);
      console.log("data "+data);
      });
    }
    else{
      let message={
        title: 'Alert !',
        msg:'Please enter correct details'
       } 
       this.events.publish('alert:presented',message );
    }
  }
    saveLoginData(data)
    {
      this.loginResponse = data;
      window.localStorage.setItem('userID',this.loginResponse.responseData.response.userId);
      window.localStorage.setItem('emailID',this.loginResponse.responseData.response.emailId);

      console.log("userId "+ window.localStorage.getItem('userID'));
      console.log("emailID "+ window.localStorage.getItem('emailID'));

      this.callPageValidation();
    }

    callPageValidation()
    {
      this.events.publish('loader:dismiss');
        if(this.loginResponse.status == 200)
        {
          this.events.publish('loader:dismiss');
        this.navCtrl.setRoot(TabsPage);
        }
        else
        {
        let message={
          title: 'Alert !',
          msg:this.loginResponse.responseData.message
         } 
          this.events.publish('alert:presented',message );
        }
    }
}
