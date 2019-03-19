import { Shipper } from './../models/shipper';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  addUrl = '/shipper/addJson';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('Content-Type', 'application/json');
  }

  public add(shipper: Shipper) {
    this.http.post(environment.APIEndpoint + this.addUrl, shipper, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  public listShippers() {
    return this.http.get<Shipper[]>(environment.APIEndpoint + '/shipper/all');
  }
    public  getShipperById(id: number) {
      return this.http.get<Shipper>(environment.APIEndpoint + '/shipper/' + id );
  }

  public deleteShipper(id: number) {
    return this.http.delete(environment.APIEndpoint + '/shipper/' + id);
  }

  public updateShipper(shipper: Shipper) {
    return this.http.patch(environment.APIEndpoint + '/shipper/' + shipper.shipperId, shipper);
  }


}
