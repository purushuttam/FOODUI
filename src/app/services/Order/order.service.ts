import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/comman/comman.model';
import { Order, UpdateOrderStatus } from 'src/app/models/order/order.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseurl = environment.baseApiUrl
  constructor(private http:HttpClient) {
    console.log('service started')
  }

  GetAllOrderByRestrauntId() : Observable<any> {
    return this.http.get<Response>(this.baseurl + '/Orders/GetAllOrderByRestrauntId');
  }
  GetOrderDetailsByOrderId(orderId: string) : Observable<any> {
    return this.http.get<Response>(this.baseurl + '/Orders/GetOrderDetailsByOrderId' + orderId);
  }
  SaveOrder(order: Order) : Observable<any> {
    return this.http.post<Response>(this.baseurl + '/Orders/SaveOrder',order);
  }
  UpdateOrder(order: Order) : Observable<any> {
    return this.http.post<Response>(this.baseurl + '/Orders/UpdateOrder',order);
  }
  UpdateOrderStatus(status: UpdateOrderStatus) : Observable<any> {
    return this.http.post<Response>(this.baseurl + '/Orders/UpdateOrderStatus',status);
  }
}
