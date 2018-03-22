import { Component,ViewChild } from '@angular/core';
import { Platform, AlertController,Nav, LoadingController} from 'ionic-angular';
import { Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { App } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
   loading1 ;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,public app:App,events:Events,public loading:LoadingController,public alertCtrl:AlertController, statusBar: StatusBar, splashScreen: SplashScreen , authService : AuthenticationServiceProvider ) {
    platform.ready().then(() => {
      this.loading1 =  this.loading.create({
        content: 'Please wait...'
      });
      
      // this.rootPage = LoginPage;

      events.subscribe('alert:presented', (alertData) => {
        console.log(JSON.stringify(alertData));
        this.showAlert(alertData.title,alertData.msg);
      });  

      events.subscribe('loader:presented', (alertData) => {
        this.showLoader();
      }); 
      
      events.subscribe('loader:dismiss', (alertData) => {
        this.dismissLoader();
      }); 

      if(authService.isLogedIn())
      {
        this.rootPage = TabsPage;
      }
      else
      {
        this.rootPage = LoginPage;
      }
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public showAlert(title:string,message: string) {
    let alert = this.alertCtrl.create({
        title: title,
        subTitle:message ,
        buttons: ['OK']
    });
    alert.present();
  }
  goToHome()
  {this.app.getRootNav().getActiveChildNav().select(1);
  }

  goToItemList(){
    this.app.getRootNav().getActiveChildNav().select(0);
  }

  goToQuoteList()
  {
    this.app.getRootNav().getActiveChildNav().select(1);
  }

  logout()
  {
    window.localStorage.setItem('userID','');
    window.localStorage.setItem('emailID','');
    this.app.getRootNav().setRoot(LoginPage);
  }

  showLoader()
  {
    this.loading1.present();
  }
  
  dismissLoader()
  {
    this.loading1.dismiss();
  }
}
