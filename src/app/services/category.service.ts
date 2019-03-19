import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../models/category';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  addUrl = '/product/category/addJson';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
  }

  public add(category: Category) {
    this.http.post(environment.APIEndpoint + this.addUrl, category, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  public listCategories() {
    return this.http.get<Category[]>(environment.APIEndpoint + '/product/category/all');
  }
    public  getCategoryById(id: number) {
      return this.http.get<Category>(environment.APIEndpoint + '/product/category/' + id );
  }

  public deleteCategory(id: number) {
    return this.http.delete(environment.APIEndpoint + '/product/category/' + id);
  }

  public deleteCategory2(id: number) {
    return this.http.post(environment.APIEndpoint + '/product/category/' + id,{}, {params: {_method : 'delete'}});
  }

  public updateCategory(category: Category) {
    return this.http.patch(environment.APIEndpoint + '/product/category/' + category.productCategoryId, category);
  }



}
