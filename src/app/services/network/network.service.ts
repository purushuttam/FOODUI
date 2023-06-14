import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  baseurl = 'https://expressmongobackend.onrender.com/';

  constructor(private http: HttpClient) {
    console.log('service started');
  }

  GetIpDetails<T>(): Observable<T> {
    return this.http.get<T>(
      this.baseurl + 'api/v1/connection/GetLocalIpAddress'
    );
  }

  GetServerIpDetails<T>(): Observable<T> {
    return this.http.get<T>('https://api.ipify.org/?format=json');
  }
}
