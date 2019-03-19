import { Region } from './../models/region';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  addUrl = '/region/addJson';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
  }

  public add(region: Region) {
    this.http.post(environment.APIEndpoint + this.addUrl, region, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  public listRegions() {
    return this.http.get<Region[]>(environment.APIEndpoint + '/region/all');
  }
    public  getRegionById(id: number) {
      return this.http.get<Region>(environment.APIEndpoint + '/region/' + id );
  }

  public deleteRegion(id: number) {
    return this.http.delete(environment.APIEndpoint + '/region/' + id);
  }



  public updateRegion(region: Region) {
    return this.http.patch(environment.APIEndpoint + '/region/' + region.regionId, region);
  }



}
