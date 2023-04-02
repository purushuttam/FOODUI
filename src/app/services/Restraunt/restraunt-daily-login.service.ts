import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/comman/comman.model';
import { Order } from 'src/app/models/order/order.model';
import { environment } from 'src/environment/environment';
import { RestrauntDailyLogin } from 'src/app/models/RestrauntLogin/restraunt.model';
@Injectable({
  providedIn: 'root',
})
export class RestrauntDailyLoginService {
  baseurl = environment.baseApiUrl;
  constructor(private http: HttpClient) {
    console.log('service started');
  }

  GetRestrauntStatus(): Observable<any> {
    return this.http.get<Response>(
      this.baseurl + '/RestrauntDailyLogin/GetRestrauntStatus'
    );
  }

  GetAllTodayOrderDetails(): Observable<any> {
    return this.http.get<Response>(
      this.baseurl + '/RestrauntDailyLogin/GetAllTodayOrderDetails'
    );
  }

  UpdateTotalOrder(orders: Order): Observable<any> {
    return this.http.post<Response>(
      this.baseurl + '/RestrauntDailyLogin/UpdateTotalOrder',
      orders
    );
  }

  UpdateCompletedOrder(orders: Order): Observable<any> {
    return this.http.post<Response>(
      this.baseurl + '/RestrauntDailyLogin/UpdateCompletedOrder',
      orders
    );
  }

  UpdateCancelledOrder(orders: Order): Observable<any> {
    return this.http.post<Response>(
      this.baseurl + '/RestrauntDailyLogin/UpdateCancelledOrder',
      orders
    );
  }

  OnlineRestraunt(RestrauntLogin: RestrauntDailyLogin): Observable<any> {
    return this.http.post<Response>(
      this.baseurl + '/RestrauntDailyLogin/OnlineRestraunt',
      RestrauntLogin
    );
  }

  OfflineRestraunt(RestrauntLogin: RestrauntDailyLogin): Observable<any> {
    return this.http.post<Response>(
      this.baseurl + '/RestrauntDailyLogin/OfflineRestraunt',
      RestrauntLogin
    );
  }
}
