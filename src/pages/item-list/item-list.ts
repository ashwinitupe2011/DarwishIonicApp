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

  selectedItems  =[];
  singleItem

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;

  orderDetails : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public itemService : ItemServiceProvider) {
    this.searchControl = new FormControl();
    this.callListResponse();
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.setFilteredItems();
  });
  //   
  }

  // ngOnInit()
	// {
  //   this.callListResponse();
  //   this.setFilteredItems();
  //   this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
  //     this.setFilteredItems();
  // });
  // }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }



  callListResponse()
  {
    this.itemService.getItemList().then(data => {
      this.saveItemList(data);
      });
  }

  saveItemList(data)
  {
    this.items = data.responseData.response;
    console.log(this.items);
  }
  setFilteredItems() {
    this.items = this.itemService.filterItems(this.searchTerm);
  }

  openInvoice()
  {
    console.log("Selected Items:"+this.selectedItems);
    this.navCtrl.push(InvoiceDetailsPage,{itemList :this.selectedItems});
  }

  addItem(e:any,item1)
  {
    console.log(e.checked);

    if(e.checked)
    {
      console.log(item1);
      this.selectedItems.push(item1);
    }
    else
    {
      this.selectedItems.pop();
      console.log("edhgfcyuj");

      for(var i=0;i<this.selectedItems.length;i++)
      {
        if(this.selectedItems[i].title == item1.title)
        {
          this.selectedItems.slice(i,1);
        }
        
      }
    }
  }
}
