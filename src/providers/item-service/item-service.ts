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
    if (this.itemListResponse) {
      return Promise.resolve(this.itemListResponse);
    }
 
    var itemListParam = {};
    
    return new Promise(resolve => {
      this.http.post('http://192.168.2.148:56446/item/list',itemListParam)
        .map(res => res.json())
        .subscribe(data => {
          this.itemListResponse = data;
          this.items = data.responseData.response;
          resolve(this.itemListResponse);
        });
    });
  }


  getQuoteDetails()
  {
    if (this.quoteDetailList) {
      return Promise.resolve(this.quoteDetailList);
    }
 
    var quoteDetailsParam = {userId:"S01294"};
    
    return new Promise(resolve => {
      this.http.post('http://192.168.2.148:56446/item/user/list',quoteDetailsParam)
        .map(res => res.json())
        .subscribe(data => {
          this.quoteDetailList = data;
          resolve(this.quoteDetailList);
        });
    });
  }
  insertItems(itemList)
  {
    if (this.insertItemResponse) {
      return Promise.resolve(this.insertItemResponse);
    }
    console.log("item Param "+ JSON.stringify(itemList));
    
    return new Promise(resolve => {
      this.http.post('http://192.168.2.148:56446/item/insert',itemList)
        .map(res => res.json())
        .subscribe(data => {
          this.insertItemResponse = data;
          resolve(this.insertItemResponse);
        });
    });
  }
}
