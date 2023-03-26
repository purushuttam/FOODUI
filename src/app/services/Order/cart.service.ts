import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable, observable } from 'rxjs';
import { FoodDetails } from 'src/app/models/food/food.model';
import { Response } from 'src/app/models/comman/comman.model';
import { Cart } from 'src/app/models/order/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  basApiurl = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  AddToCart(Cart: Cart): Observable<any> {
    return this.http.post<Response>(this.basApiurl + '/Cart/AddToCart', Cart);
  }

  GetCart(seasion_id: string): Observable<any> {
    return this.http.get<Response>(
      this.basApiurl + '/Cart/GetCartDetails/' + seasion_id
    );
  }

  ProcedToCheckout(seasion_id: string): Observable<any> {
    return this.http.get<Response>(
      this.basApiurl + '/Cart/checkout/' + seasion_id
    );
  }
  RemoveFromCart(session_id: string, index: number): Observable<any> {
    return this.http.delete<Response>(
      this.basApiurl +
        '/Cart/RemoveFromCart/' +
        session_id +
        '/' +
        index
    );
  }
}
