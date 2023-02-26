import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodCategory } from 'src/app/models/food/food.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodCategoryServiceService {

  baseurl = environment.baseApiUrl
  constructor(private http:HttpClient) {
    console.log('service started')
  }

  AddFoodCategory(foodCategory:FoodCategory) : Observable<any> {
    return this.http.post<any>(this.baseurl + '/FoodCategory/SaveFoodCategory',foodCategory)
  }
}
