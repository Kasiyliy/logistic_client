import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckCompanyBinService {
  headers: HttpHeaders;
  constructor(private http: HttpClient ) {
  }

  checkCompanyBin(bin) {
    const params = new HttpParams().set('logNamespace', '');

    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append( 'Content-Type', 'application/json');

    return this.http.get('http://87.255.197.72/goszakup/' + bin,  {headers: this.headers, params: params}).subscribe(res => {
      alert(true);
    }, err => {
      alert(false);
    });
  }
}
