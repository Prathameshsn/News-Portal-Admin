// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Custom
import { NewsRoutingModule } from './news-routing.module';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ViewNews } from './view-news/view-news.component'; 
// Material
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [NewsListingComponent, AddNewsComponent, ViewNews],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    NewsRoutingModule,

    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class NewsModule { }
