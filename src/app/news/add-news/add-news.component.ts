import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { apiConfig } from '../common/api.config';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})

export class AddNewsComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl(null, Validators.required, Validators.max(45)),
    description: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required)
  })
  imageFile: File;
  environment = environment;
  pageId: number; // Page id will be present in edit environment, using for differentiate between add nad edit page.
  categories: any = [];

  constructor(
    private http: HttpClient, 
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {   
    this.pageId = this.activatedRoute.snapshot.params.id;
    this.getCategories();
    if (this.pageId) {
      this.getNewsDetail();
    }
  }
  
  getCategories() {
    this.http.get(apiConfig.getCategories)
    .subscribe(result => {
      if (result['status'] === 200) {
        this.categories = result['data'];
      }
    })
  }

  getNewsDetail() {
    let param = new HttpParams();
    param = param.append('id', 1);
    this.http.get(apiConfig.getNewsDetails, {params: param})
    .subscribe(result => {
      if (result['status'] === 200) {
        this.form.controls.title.setValue(result['data'].title);
        this.form.controls.description.setValue(result['data'].description);
        this.form.controls.category.setValue(parseInt(result['data'].category));
        this.imageFile = result['data'].image_url;
      }
    })
  }

  onImageUpload(file) {
    this.imageFile = file.target.files[0];
  }

  makeParam() {
    const param = new FormData();
    if (this.pageId) {
      param.append('id', this.pageId.toString());
    }
    param.append('title', this.form.controls.title.value);
    param.append('description', this.form.controls.description.value);
    param.append('category', this.form.controls.category.value);
    param.append('file', this.imageFile);
    return param;
  }

  addNews() {
    this.http.post(apiConfig.add, this.makeParam())
    .subscribe(result => {
      if (result['status'] === 200) {
        this.route.navigateByUrl('/');
      }
    })
  }

  updateNews() {
    this.http.put(apiConfig.edit, this.makeParam())
    .subscribe(result => {
      if (result['status'] === 200) {
        this.route.navigateByUrl('/');
      }
    })
  }

  onSave() {
    if (this.form.valid) {
      if (this.pageId) { this.updateNews();}
      else { this.addNews(); }
    }
  }

}