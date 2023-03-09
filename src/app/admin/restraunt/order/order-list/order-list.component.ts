import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import { Order } from 'src/app/models/order/order.model';
import { OrderService } from 'src/app/services/Order/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{
  order:Order[] = []
  constructor(private orderService:OrderService,
    private messageService:MessageService){

  }

  ngOnInit(){
    this.orderService.GetAllOrderByRestrauntId().subscribe({
      next:(response:Response) => {
        if(response.resp){
          this.order = response.respObj;
        }
        else{
          console.log(response.respMsg)
        }
      },
      error :response => {
        console.log(response);
      }
    })
  }
}
