import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomAddsListingComponent } from './custom-adds-listing/custom-adds-listing.component';


const routes: Routes = [
  {
    path: '',
    component: CustomAddsListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomAddsRoutingModule { }
