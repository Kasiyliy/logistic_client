import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Characteristic} from '../models/characteristic';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacteristicService {

  addUrl = '/specialCharacteristic/addJson';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
  }

  public add(characteristic: Characteristic) {
    this.http.post(environment.APIEndpoint + this.addUrl, characteristic, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  public listCharacteristics() {
    return this.http.get<Characteristic[]>(environment.APIEndpoint + '/specialCharacteristic/all');
  }
    public  getCharacteristicById(id: number) {
      return this.http.get<Characteristic>(environment.APIEndpoint + '/specialCharacteristic/' + id );
  }

  public deleteCharacteristic(id: number) {
    return this.http.delete(environment.APIEndpoint + '/specialCharacteristic/' + id);
  }

  public deleteCategory2(id: number) {
    return this.http.post(environment.APIEndpoint + '/product/category/' + id, { }, {params: {_method : 'delete'}});
  }





}
