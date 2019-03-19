import { Country } from './../models/country';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  addUrl = '/country/addJson';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
  }

  public add(country: Country) {
    this.http.post(environment.APIEndpoint + this.addUrl, country, {headers: this.headers, responseType: 'text'}).subscribe(res => {
      this.toastr.success(res);
    }, err => {
      this.toastr.error(err);
    });
  }

  public listCountries() {
    return this.http.get<Country[]>(environment.APIEndpoint + '/country/all');
  }

  public  getCountryById(id: number) {
    return this.http.get<Country>(environment.APIEndpoint + '/country/' + id );
}

  public deleteCountry(id: number) {
    return this.http.delete(environment.APIEndpoint + '/country/' + id);
  }

  public updateCountry(country: Country) {
    return this.http.patch(environment.APIEndpoint + '/country/' + country.countryId, country);
  }



}
