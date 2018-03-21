import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { InvoiceSuccessPage } from '../invoice-success/invoice-success';
import { ItemServiceProvider } from '../../providers/item-service/item-service';

import { Geolocation } from '@ionic-native/geolocation';
import { TabsPage } from '../tabs/tabs';

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
    totalprice =0;
    lat;
    longitude;

  items;
  totalPrice:number;
  
  constructor(public navCtrl: NavController,public geolocation: Geolocation,public navParams: NavParams,public alertCtrl: AlertController,public itemService:ItemServiceProvider) {
    this.initializeItems();
    this.totalPrice = 1500;
    
    console.log("ItemList selected :"+navParams.get("itemList"));
    this.callLoacationAPI();
  }

  calculateTotalPrice(data)
  {
   let price = [];
  
    for(var i =0;i<data.length;i++)
    {
      price[i] =  this.Form.vf[i]* data[i].unitPrice;
    }

    for(var i=0;i<price.length;i++)
    {
      this.totalprice = price[i] + this.totalprice;
    }
     console.log("price "+this.totalprice);
  }
  ngOnInit()
  {
  
    
  }
  callLoacationAPI()
  {
        this.geolocation.getCurrentPosition().then((resp) => {
     console.log("Location "+JSON.stringify(resp));
     this.lat = resp.coords.latitude;
     this.longitude = resp.coords.longitude;
      // resp.coords.latitude
      // resp.coords.longitude
  }).catch((error) => {
      console.log('Error getting location', error);
     console.log('Error getting location');
  });

  let watch = this.geolocation.watchPosition();
  watch.subscribe((data) => {
      console.log("Location "+JSON.stringify(data));
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailsPage');
   
  }

  // onSuccess()
  // {
  //   alert("Order Place Succesfuly");
  // }

  initializeItems() {
    this.items = this.navParams.get("itemList");
    console.log(this.items);
		console.log(this.items);
  }
  
  confirmOrderDetails() {
    const alertConfirm = this.alertCtrl.create({
      title: 'Continue....',
      message: 'R u sure you want to place this order ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            console.log(this.Form);
            this.calculateTotalPrice(this.navParams.get("itemList"));
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
      this.navCtrl.pop();
      this.navCtrl.push(InvoiceSuccessPage,{itemInfo:data.responseData.response});
    }
    else
    {
      alert("Incorrect Request. Fill all details");
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
        "locLat" : this.lat,
        "locLong":this.longitude, 
        "userId" : "S01294", 
        "status" : "requested",
        "itemList" : this.jsonArray
      };
      console.log(JSON.stringify(this.insertJson));
    }
}