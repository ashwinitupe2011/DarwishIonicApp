import { Component } from '@angular/core';
import { OrderDetailsPage } from '../order-details/order-details';
import { ItemListPage } from '../item-list/item-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ItemListPage;
  tab2Root = OrderDetailsPage;

  constructor() {

  }
}
