import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/comman/comman.model';
import { FoodCategory } from 'src/app/models/food/food.model';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodCategoryServiceService {
  baseurl = environment.baseApiUrl;
  constructor(private http: HttpClient) {
    console.log('service started');
  }

  AddFoodCategory(foodCategory: FoodCategory): Observable<any> {
    return this.http.post<any>(
      this.baseurl + '/FoodCategory/SaveFoodCategory',
      foodCategory
    );
  }
  GetAllFoodCategory(): Observable<Response> {
    return this.http.get<Response>(
      this.baseurl + '/FoodCategory/GetAllFoodCategroy'
    );
  }
  GetFoodCategoryById(id: string): Observable<FoodCategory> {
    return this.http.get<FoodCategory>(
      this.baseurl + '/FoodCategory/GetFoodCategroyById/' + id
    );
  }
  DeleteFoodCategory(Id: string): Observable<any> {
    return this.http.delete<any>(
      this.baseurl + '/FoodCategory/DeleteFoodCategory/' + Id
    );
  }
  UpdateFoodCategory(foodCategory: FoodCategory): Observable<any> {
    return this.http.post<any>(
      this.baseurl + '/FoodCategory/UpdateFoodCategory',
      foodCategory
    );
  }
}
