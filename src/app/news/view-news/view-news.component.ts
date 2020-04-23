import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiConfig } from '../common/api.config';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'view-news',
    templateUrl: './view-news.component.html',
    styleUrls: ['./view-news.component.scss']
})

export class ViewNews implements OnInit {
newsDetails = {};
environment = environment;

constructor(private http: HttpClient) { }

ngOnInit() {
    this.getNewsDetails();
}

getNewsDetails() {
    const param = { 'id' : 1 };
    this.http.get(apiConfig.getNewsDetails, {params: param})
    .subscribe(result => {
        if (result.status === 200) {
            this.newsDetails = result['data'];
        }
    })
}

}