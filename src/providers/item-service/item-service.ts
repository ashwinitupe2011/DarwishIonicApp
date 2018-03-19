import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http ,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItemServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemServiceProvider {

  items: any;

  ItemList : any[];

  constructor(public http: HttpClient) {
    console.log('Hello ItemServiceProvider Provider');
    this.items = [
      {title: 'Item-A',price:"20",availableQuantity:"120qty"},
      {title: 'Item-B' ,price:"120",availableQuantity:"100qty"},
      {title: 'Item-AA' ,price:"200",availableQuantity:"50qty"},
      {title: 'Item-AB',price:"250",availableQuantity:"89qty"},
      {title: 'Item-AAA',price:"850",availableQuantity:"30qty"},
      {title: 'Item-ASs',price:"300",availableQuantity:"16  qty"}
  ]
  }


  getOrderDetails()
  {
      
  }

  filterItems(searchTerm){
 
    return this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    
}

// getItemList()
// {
//   let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');

//     let options = new RequestOptions({method:"POST",headers:headers})
  
//     let data = JSON.stringify(
//       {unitNo:1,
//         request:"GetPrescriptionList",
//       unique_token:123456,
//       patientID:window.localStorage.getItem('PatientId')
//      })
//     console.log(data);

//     if (this.ItemList) {
//           return Promise.resolve(this.ItemList);
//         }
      
      
//         return new Promise(resolve => {
//           this.http.post('http://192.168.2.185/WebAPI/api/PrescriptionList',data,options)
//             .map(res => res.json().data.PrescriptionList)
//             .subscribe(data => {
//               console.log("prescription List : " +data);
//               this.ItemList = data;
//               resolve(this.ItemList);
//             });
//         });
// }
}
