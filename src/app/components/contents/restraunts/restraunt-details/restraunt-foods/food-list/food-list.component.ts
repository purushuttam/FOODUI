import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import { FoodDetails } from 'src/app/models/food/food.model';
import { Cart, Cartitem } from 'src/app/models/order/cart.model';
import { CartService } from 'src/app/services/Order/cart.service';
import { FoodDetailsService } from 'src/app/services/Restraunt/food-details.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  restraunt_id: string;
  foodList: FoodDetails[] = [];
  cartFoods: Cartitem[] = [];

  cartItems: Cartitem[] = [];
  itemsCount: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private routes: Router,
    private foodService: FoodDetailsService,
    private cartService:CartService,
    private messageService:MessageService
  ) {
    this.restraunt_id = this.activateRoute.snapshot.queryParams['restraunt_id'];
    console.log(this.restraunt_id);
  }
  cartFood:Cartitem = {
    food_detail_id:'',
    restraunt_id:'',
    food_name:'',
    food_type:'',
    quantity:0,
    image:'',
    price:0,
    discount:'',
  }

  ngOnInit(): void {
    ///
    this.foodService
      .GetAllFoodDetailsByRestrauntIdB2C(this.restraunt_id)
      .subscribe({
        next: (response: Response) => {
          if (response.resp) {
            this.foodList = response.respObj;
            console.log(response.respObj);
          } else {
            console.log(response.respMsg);
          }
        },
        error: (response) => {
          console.log(response);
        },
      });
      ////
      this.refresCart();
  }

  refresCart() {
    this.cartService.GetCart(localStorage.getItem('session_id') ?? '').subscribe({
      next: (response:Response) => {
        if(response.resp){
          this.cartItems = response.respObj.food_details;
          this.itemsCount = this.cartItems.length;
          console.log(this.itemsCount);
        }
        else{
          console.log(response);
        }
      },
      error: response => {
        console.log(response);
      }
    })
  }

  Cart:Cart = {
    session_id:'',
    food_details:[],
    json_food_details:'',
    total_amount:0,
    is_active:true,
    created_by:'',
    created_on:'2023-02-28T11:12:28.406',
    updated_by:'',
    updated_on:'2023-02-28T11:12:28.406',
    mobile:'',
    address:''
  }

  addToCart(food: FoodDetails): void {
    console.log(this.cartFoods);
    // debugger
    this.cartFood.food_detail_id = food.food_detail_id;
    this.cartFood.restraunt_id = food.reastraunt_id;
    this.cartFood.food_name = food.food_name;
    this.cartFood.food_type = food.food_type;
    this.cartFood.image = food.image;
    this.cartFood.discount = food.discount;
    this.cartFood.price = Number(food.price);
    this.cartFood.quantity = 1;
    this.cartItems.push(this.cartFood);
    this.Cart.food_details = this.cartItems;
    console.log(this.cartItems);
    this.Cart.session_id = localStorage.getItem('session_id') ?? '';
    this.cartService.AddToCart(this.Cart).subscribe({
      next :(response:Response) =>{
        if(response.resp){
          this.messageService.add({severity:'success', summary:food.food_name, detail:'Added Successfuly'});
          localStorage.setItem('session_id',response.respObj.session_id);
          console.log(response);
          this.refresCart();
        }
      }
    })
  }
}
