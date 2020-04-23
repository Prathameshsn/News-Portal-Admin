import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { route } from '../common/news.enum';
import { apiConfig } from '../common/api.config';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {
  route = route;
  newsList = [];
  Categories: any = [];
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {    
    this.http.get(apiConfig.list)
    .subscribe( result => {
      if (result['status'] === 200) {
        this.newsList = result['data'];
        this.newsList.forEach((element,index) => {
          element.id = index + 1
        })
      }
    })
  }

}
