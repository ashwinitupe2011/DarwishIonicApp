import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { ItemServiceProvider } from '../../providers/item-service/item-service'
import 'rxjs/add/operator/debounceTime';
import { InvoiceDetailsPage } from '../invoice-details/invoice-details';

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {


  searchTerm: string = '';
  searchControl: FormControl;
  items: any;

  orderDetails : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public itemService : ItemServiceProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');

    this.setFilteredItems();
 
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
            this.setFilteredItems();
        });
 
  }

  setFilteredItems() {
    this.items = this.itemService.filterItems(this.searchTerm);
  }

  openInvoice()
  {
    this.navCtrl.push(InvoiceDetailsPage);
  }
}
