import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import { Order, OrderItem } from 'src/app/models/order/order.model';
import { PaymentRzPay } from 'src/app/models/Payment/payment.model';
import { OrderService } from 'src/app/services/Order/order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  orderdetails: Order = {
    order_id: '',
    customer_id: '',
    restraunt_id: '',
    order_details: '',
    total_price: 0,
    discount: '',
    delivery_address: '',
    notes: '',
    delivery_by: '',
    executive_id: '',
    order_status: 0,
    is_active: false,
    created_on: '',
    created_by: '',
    updated_on: '',
    updated_by: '',
    orderItems: [],
  };
  OrderItem: OrderItem[] = [];
  // OrderItem: OrderItem = {
  //   order_item_id: '',
  //   order_id: '',
  //   food_category_id: '',
  //   order_item_name: '',
  //   order_item_qty: 0,
  //   order_item_price: 0,
  //   order_item_total_price: 0,
  //   is_active: false,
  //   created_on: '',
  //   created_by: '',
  //   updated_on: '',
  //   updated_by: '',
  // };
  orderpayment: PaymentRzPay = {
    session_id: '',
    razorpay_payment_id: '',
  };
  isLoading = true;
  isPaymentSuccessfull = false;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.route.queryParamMap.subscribe((params) => {
      const razorpay_payment_id = params.get('razorpay_payment_id');
      const razorpay_payment_link_id = params.get('razorpay_payment_link_id');
      const razorpay_payment_link_reference_id = params.get(
        'razorpay_payment_link_reference_id'
      );
      const razorpay_payment_link_status = params.get(
        'razorpay_payment_link_status'
      );
      const razorpay_signature = params.get('razorpay_signature');
      this.orderpayment.razorpay_payment_id = razorpay_payment_id ?? '';
      this.orderpayment.session_id = localStorage.getItem('session_id') ?? '';
      console.log(
        razorpay_payment_id,
        razorpay_payment_link_id,
        razorpay_payment_link_reference_id,
        razorpay_payment_link_status,
        razorpay_signature
      );
    });
    this.orderService.SaveOrder(this.orderpayment).subscribe({
      next: (response: Response) => {
        if (response.resp) {
          this.isLoading = false;
          this.isPaymentSuccessfull = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Payment Confirmed',
            detail: 'Your payment was successful.',
          });
          console.log(response);
          this.orderdetails = response.respObj;
          console.log(this.orderdetails.orderItems.values());
          console.log(this.orderdetails.orderItems);
          this.OrderItem = this.orderdetails.orderItems;
          console.log(this.OrderItem);
          localStorage.removeItem('session_id');
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Payment failed',
            detail: 'Your payment was failed.',
          });
        }
      },
      error: (response) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Payment failed',
          detail: 'Your payment was failed.',
        });
      },
    });
  }

  ngOnInit(): void {
    // this.isLoading = false;
  }
}
