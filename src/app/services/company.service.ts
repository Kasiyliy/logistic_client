import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Company} from '../models/company';
import {environment} from '../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  headers: HttpHeaders;
  addUrl = '/seller/company/addJson';

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
  }

  public add(company: Company) {
    this.http.post(environment.APIEndpoint + this.addUrl, company, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }
}
