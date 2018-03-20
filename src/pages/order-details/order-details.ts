import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemServiceProvider } from '../../providers/item-service/item-service';

/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {

	items : any[];

	myDate: String = new Date().toISOString();
  shownGroup = null;
	constructor(public navCtrl: NavController, public navParams: NavParams,public itemService : ItemServiceProvider) {
		this.getOrderDetails();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad OrderDetailsPage');
	}

	getOrderDetails()
	{
		this.itemService.getQuoteDetails().then(data => {
			this.saveQuoteList(data);
			});
	}

	saveQuoteList(data)
	{
		this.items = data.responseData.response;
	}

    toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    };
    isGroupShown(group) {
        return this.shownGroup === group;
    };
}
