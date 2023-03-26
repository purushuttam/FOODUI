import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Response } from 'src/app/models/comman/comman.model';
import { FoodDetails } from 'src/app/models/food/food.model';
import { Cart, Cartitem } from 'src/app/models/order/cart.model';
import { RazorPayRs } from 'src/app/models/Payment/payment.model';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';
import { CartService } from 'src/app/services/Order/cart.service';
import { PaymentService } from 'src/app/services/Payment/payment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any;
  foodItems: Cartitem[] = [];

  constructor(
    private cartService: CartService,
    private AuthService: AuthServiceService,
    private router: Router,
    private paymentSerive: PaymentService
  ) {}

  ngOnInit(): void {
    this.cartService
      .GetCart(localStorage.getItem('session_id') ?? '')
      .subscribe({
        next: (response: Response) => {
          if (response.resp) {
            this.cart = response.respObj;
            this.foodItems = this.cart.food_details;
          }
        },
      });
  }
  getTotalPrice(): number {
    let total = 0;
    this.foodItems.forEach((item) => (total += item.price * item.quantity));
    return total;
  }
  incrementQuantity(item: Cartitem) {
    item.quantity++;
  }

  decrementQuantity(item: Cartitem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(index: number) {
    this.foodItems.splice(index, 1);
    this.cartService
      .RemoveFromCart(localStorage.getItem('session_id') ?? '', index)
      .subscribe({
        next: (response: Response) => {
          if (response.resp) {
            console.log(response);
          } else {
            console.log(response);
          }
        },
        error: (response) => {
          console.log(response);
        },
      });
  }

  ProceedPayment(): void {
    console.log(this.cart);
    this.cart.address = this.address;
    this.cart.mobile = this.mobile;
    if (this.AuthService.isLoggedIn()) {
      this.paymentSerive.GetRazorPayPaymentLink(this.cart).subscribe({
        next: (response: RazorPayRs) => {
          console.log(response);
          var redirectLink = response;
          console.log(redirectLink.short_url);
          window.location.href = redirectLink.short_url;
        },
        error: response => {
          console.log(response);
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  }


  address: string='';
  mobile: string='';

}
