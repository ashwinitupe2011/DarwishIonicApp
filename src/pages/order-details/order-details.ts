import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

	myDate: String = new Date().toISOString();
  shownGroup = null;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		console.log("Date:"+this.myDate);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad OrderDetailsPage');
	}

	items = [
	    'RNo:10090',
	    'RNo:10091',
	    'RNo:10092',
	    'RNo:10093',
	    'RNo:10094',
	    'RNo:10095',
	    'RNo:10096',
	    'RNo:10097',
	    'RNo:10098',
	    'RNo:10099'
	];


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
