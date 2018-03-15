import { Component } from '@angular/core';

// import { ContactPage } from '../contact/contact';
import { OrderDetailsPage } from '../order-details/order-details';
import { ItemListPage } from '../item-list/item-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ItemListPage;
  tab2Root = OrderDetailsPage;
//  tab3Root = ContactPage;

  constructor() {

  }
}
