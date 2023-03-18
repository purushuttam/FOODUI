import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Response } from 'src/app/models/comman/comman.model';
import { FoodDetails } from 'src/app/models/food/food.model';
import { FoodDetailsService } from 'src/app/services/Restraunt/food-details.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  restraunt_id: string;
  foodList: FoodDetails[] = [];
  Cart: FoodDetails[] = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private routes: Router,
    private foodService: FoodDetailsService
  ) {
    this.restraunt_id = this.activateRoute.snapshot.queryParams['restraunt_id'];
    console.log(this.restraunt_id);
  }

  ngOnInit(): void {
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
  }

  addToCart(food: FoodDetails): void {
    this.Cart.push(food);
    console.log(this.Cart);
  }
}
