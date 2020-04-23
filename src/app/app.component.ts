import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portal-admin';
  menus: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.httpClient.get('http://localhost:3000/getmenus')
    .subscribe(res => {
      this.menus = res['result'];
    });
  }
}
