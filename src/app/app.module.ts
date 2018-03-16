import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { OrderDetailsPage } from '../pages/order-details/order-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItemListPage } from '../pages/item-list/item-list';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { ItemServiceProvider } from '../providers/item-service/item-service';
import { InvoiceDetailsPage } from '../pages/invoice-details/invoice-details';
import { InvoiceSuccessPage } from '../pages/invoice-success/invoice-success';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OrderDetailsPage,
    ItemListPage,
    LoginPage,
    InvoiceDetailsPage,
    InvoiceSuccessPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    OrderDetailsPage,
    ItemListPage,
    LoginPage,
    InvoiceDetailsPage,
    InvoiceSuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationServiceProvider,
    ItemServiceProvider
  ]
})
export class AppModule {}
