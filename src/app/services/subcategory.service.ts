import { SubCategory } from './../models/subcategory';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  addUrl = '/product/category/subcategory/addJson';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
  }

  public add(subcategory: SubCategory) {
    this.http.post(environment.APIEndpoint + this.addUrl, subcategory, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  public listSubCategories() {
    return this.http.get<SubCategory[]>(environment.APIEndpoint + '/product/category/subcategory/all');
  }
    public  getSubCategoryById(id: number) {
      return this.http.get<SubCategory>(environment.APIEndpoint + '/product/category/subcategory/' + id );
  }

  public deleteSubCategory(id: number) {
    return this.http.delete(environment.APIEndpoint + '/product/category/subcategory/' + id);
  }

  public deleteSubCategory2(id: number) {
    return this.http.post(environment.APIEndpoint + '/product/category/subcategory/' + id, {} , {params: { _method : 'delete'}});
  }

  public updateSubCategory(subcategory: SubCategory) {
    return this.http.patch(environment.APIEndpoint + '/product/category/subcategory/'
    + subcategory.productSubcategoryId, subcategory);
  }



}
