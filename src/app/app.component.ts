import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen , authService : AuthenticationServiceProvider ) {
    platform.ready().then(() => {
      
      this.rootPage = LoginPage;

      // if(authService.isLogedIn)
      // {
      //   this.rootPage = LoginPage;
      // }
      // else
      // {
      //   this.rootPage = TabsPage;
      // }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
