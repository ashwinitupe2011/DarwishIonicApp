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
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // this.orderDetails = '[{"":"14 Dec 2017","List":[{"LabNo":201790}]},{"ReportDate":"15 Feb 2018","List":[{"LabNo":20181}]}]'


    this.items = [
      {ReportDate: 'RNo:10090',List:[{"LabNo":2010,"date" : '12 March 2016' }]},
      {ReportDate: 'RNo:10091' ,List:[{"LabNo":2790,"date" : '21 April 2016'}]},
      {ReportDate: 'RNo:10092' ,List:[{"LabNo":1790,"date" :'19 Jun 2016'}]},
      {ReportDate: 'RNo:10093',List:[{"LabNo":5790,"date" : '11 July 2017'}]},
      {ReportDate: 'RNo:10094',List:[{"LabNo":8906,"date" : '10 Nov 2017'}]},
      {ReportDate: 'RNo:10095',List:[{"LabNo":9867,"date" : '9 Jan 2018'}]}
  ]
  }

  sectionToggle(i)
  {
    console.log(i)
    this.items[i].open = ! this.items[i].open;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
  }

}
