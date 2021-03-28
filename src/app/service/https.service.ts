import { API_URL } from './../global/API_URL';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpsService {
  constructor(private http: HttpClient) {}
  private optionInit() {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth': localStorage.getItem('_tok') || '',
    });
    return { headers: headers };
  }

  me() {
    var options = this.optionInit();
    return this.http.get(API_URL + '/user', options);
  }
}
