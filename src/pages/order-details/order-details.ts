import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemServiceProvider } from '../../providers/item-service/item-service';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';

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
	constructor(public navCtrl: NavController,public events: Events,public http:Http, public navParams: NavParams,public itemService : ItemServiceProvider) {
		
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad OrderDetailsPage');
		// this.getOrderDetails();
	}

	getOrderDetails()
	{
		var userID = window.localStorage.getItem('userID');
		this.itemService.getQuoteDetails(userID).then(data => {
			this.saveQuoteList(data);
			});
	}

	logoutUser()
	{
		this.navCtrl.setRoot(LoginPage);
    	window.localStorage.setItem('userID','');
    	window.localStorage.setItem('emailID','');
	}
	saveQuoteList(data)
	{
		this.items = data.responseData.response;
		this.events.publish('loader:dismiss');
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
	

	ionViewWillEnter()
 	 {
	this.events.publish('loader:presented');
	
	this.getOrderDetails();
  }
}
