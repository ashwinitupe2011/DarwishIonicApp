import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoiceSuccessPage } from './invoice-success';

@NgModule({
  declarations: [
    InvoiceSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(InvoiceSuccessPage),
  ],
})
export class InvoiceSuccessPageModule {}
