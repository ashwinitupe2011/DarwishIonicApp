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
  items;
	totalPrice:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.initializeItems();
    this.totalPrice = 1500;
    
    console.log("ItemList :"+navParams.get("itemList"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailsPage');

  }

  onSuccess()
  {
    alert("Order Place Succesfuly");
  }
  initializeItems() {
    this.items = this.navParams.get("itemList");
    console.log(this.items);
    // this.items = [
		// 	{itemName: 'Item-A',price: '500'},
		// 	{itemName: 'Item-B',price: '400'},
		// 	{itemName: 'Item-C',price: '300'},
		// 	{itemName: 'Item-D',price: '200'},
		// 	{itemName: 'Item-E',price: '100'}
		// ];
		console.log(this.items);
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