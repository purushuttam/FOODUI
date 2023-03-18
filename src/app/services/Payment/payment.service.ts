import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  baseurl = environment.baseApiUrl;
  constructor(private http: HttpClient) {
    console.log('service started');
  }

  GetAllPaymentApi(): Observable<any> {
    return this.http.get<any>(this.baseurl + '/Payment/GetAllPaymentApi');
  }
  GetAllPaymentLink(method_id: string): Observable<any> {
    return this.http.get<any>(
      this.baseurl + '/Payment/GetAllPaymentLink/' + method_id
    );
  }
}
