import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ViewNews } from './view-news/view-news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListingComponent
  },
  {
    path: 'add',
    component: AddNewsComponent
  },
  {
    path: 'edit/:id',
    component: AddNewsComponent
  },
  {
    path: 'view/:id',
    component: ViewNews
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
