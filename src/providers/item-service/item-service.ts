import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
/*
  Generated class for the ItemServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemServiceProvider {

  items: any;

  itemListResponse : any[];

  quoteDetailList : any[];

  insertItemResponse : any[];

  constructor(public http: Http) {
    console.log('Hello ItemServiceProvider Provider');
  }


  filterItems(searchTerm){
    return this.items.filter((item) => {
        return item.itemName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    }); 
  }


  getItemList()
  {
    var itemListParam = {};
    
    return new Promise(resolve => {
      this.http.post('http://alice.softdotcom.in:2222/item/list',itemListParam)
        .map(res => res.json())
        .subscribe(data => {
          this.itemListResponse = [];
          this.itemListResponse = data;
          console.log("this.itemListResponse"+JSON.stringify(data));
          this.items = data.responseData.response;
          resolve(this.itemListResponse);
        },
        error => 
        {
          console.log("Error"+JSON.stringify(error.json()));
          resolve(error.json())
        });
    });
  }


  getQuoteDetails(userId)
  { 
    var quoteDetailsParam = {userId:window.localStorage.getItem('userID')};
    
    return new Promise(resolve => {
      this.http.post('http://alice.softdotcom.in:2222/item/user/list',quoteDetailsParam)
        .map(res => res.json())
        .subscribe(data => {
          this.quoteDetailList = data;
          resolve(this.quoteDetailList);
        },
        error => 
        {
          console.log("Error"+JSON.stringify(error.json()));
          resolve(error.json())
        });
    });
  }
  insertItems(itemList)
  {
    console.log("item Param "+ JSON.stringify(itemList));
    
    return new Promise(resolve => {
      this.http.post('http://alice.softdotcom.in:2222/item/insert',itemList)
        .map(res => res.json())
        .subscribe(data => {
          this.insertItemResponse = data;
          resolve(this.insertItemResponse);
        },
        error => 
        {
          console.log("Error"+JSON.stringify(error.json()));
          resolve(error.json())
        });
    });
  }
}
