import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the InvoiceSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-success',
  templateUrl: 'invoice-success.html',
})
export class InvoiceSuccessPage {

  response;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.response = this.navParams.get('itemInfo');
    console.log("LLL "+JSON.stringify(this.response));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceSuccessPage');
  }

  goBacktoRoot()
  {
    this.navCtrl.setRoot(TabsPage);
  }
}
