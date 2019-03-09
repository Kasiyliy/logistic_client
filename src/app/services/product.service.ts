import { Products } from './../models/products';

import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  addUrl = 'product/addJson';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
  }

  public add(product: Products) {
    this.http.post(environment.APIEndpoint + this.addUrl, product, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  public listProducts() {
    return this.http.get<Products[]>(environment.APIEndpoint + '/product/all');
  }
    public  getProductById(id: number) {
      return this.http.get<Products>(environment.APIEndpoint + '/product/' + id );
  }

  public deleteProduct(id: number) {
    return this.http.delete(environment.APIEndpoint + '/product/' + id);
  }



  public updateProduct(product: Products) {
    return this.http.patch(environment.APIEndpoint + '/product/' + product.productId, product);
  }



}
