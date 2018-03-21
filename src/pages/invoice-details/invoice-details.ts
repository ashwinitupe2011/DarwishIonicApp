import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { InvoiceSuccessPage } from '../invoice-success/invoice-success';
import { ItemServiceProvider } from '../../providers/item-service/item-service';

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

  public Form = { 
    vf:{ }
    };

    jsonArray = [];

     insertJson ;

  items;
  totalPrice:number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public itemService:ItemServiceProvider) {
    this.initializeItems();
    this.totalPrice = 1500;
    
    console.log("ItemList selected :"+navParams.get("itemList"));

    
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
            console.log(this.Form);
            
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');

            this.generateInsetItemJson(this.navParams.get("itemList"));

            this.insertItems(this.insertJson);
            
          }
        }
      ]
    });
    alertConfirm.present();
  }


  insertItems(data)
  {
    this.itemService.insertItems(data).then(data => {
      this.insertItemRespose(data);
      });
  }

  insertItemRespose(data)
  {
    console.log("insert Response :"+JSON.stringify(data));

    if(data.status)
    {
    this.navCtrl.push(InvoiceSuccessPage,{itemInfo:data.responseData.response});
    }
    else
    {
      alert("kkkk");
    }
  }

  generateInsetItemJson(data)
  {

    this.insertJson = "";
    console.log(JSON.stringify(data));

    for(var i =0;i<data.length;i++)
    {
      console.log(this.Form.vf);
      var obj = {
       itemCode : data[i].itemCode,
      itemName : data[i].itemName,
      quoteQuantity : this.Form.vf[i],
      quotePrice : data[i].unitPrice,
      }
     this.jsonArray.push(obj);
    }

    console.log(JSON.stringify(this.jsonArray));

    this.insertJson ={
        "location" : "23.7,12.4", 
        "userId" : "S01294", 
        "status" : "requested",
        "itemList" : this.jsonArray
      };
      console.log(JSON.stringify(this.insertJson));
    }
}