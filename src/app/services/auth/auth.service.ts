import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpParams: HttpParams;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    this.httpParams = new HttpParams();
    this.httpParams = this.httpParams.append('username', username);
    this.httpParams = this.httpParams.append('password', password);
    return this.http.post(environment.APIEndpoint + '/authentication/login', {}, {params: this.httpParams, responseType: 'text'});
  }
}
