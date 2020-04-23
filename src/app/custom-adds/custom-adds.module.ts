import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomAddsRoutingModule } from './custom-adds-routing.module';
import { CustomAddsListingComponent } from './custom-adds-listing/custom-adds-listing.component';
import { AddAddsComponent } from './add-adds/add-adds.component';


@NgModule({
  declarations: [CustomAddsListingComponent, AddAddsComponent],
  imports: [
    CommonModule,
    CustomAddsRoutingModule
  ]
})
export class CustomAddsModule { }
