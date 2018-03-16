import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { InvoiceSuccessPage } from '../invoice-success/invoice-success';

/**
 * Generated class for the InvoiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-details',
  templateUrl: 'invoice-details.html',
})
export class InvoiceDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailsPage');
  }

  onSuccess()
  {
    alert("Order Place Succesfuly");
  }

  confirmOrderDetails() {
    const alertConfirm = this.alertCtrl.create({
      title: 'Contunie....',
      message: 'Do you agree to place this order. Once order is get place it cannot be undone.',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(InvoiceSuccessPage);
          }
        }
      ]
    });
    alertConfirm.present();
}
}