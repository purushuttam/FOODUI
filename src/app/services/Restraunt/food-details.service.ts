import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { FoodDetails } from 'src/app/models/food/food.model';
import { Response } from 'src/app/models/comman/comman.model';

@Injectable({
  providedIn: 'root'
})
export class FoodDetailsService {

  baseurl = environment.baseApiUrl
  constructor(private http:HttpClient) {
    console.log('service started')
  }

  GetAllFoodDetailsByRestrauntId() : Observable<any> {
    return this.http.get<Response>(this.baseurl + '/FoodDetail/GetAllFoodDetailsByRestrauntId')
  }
  GetAllFoodDetails() : Observable<any> {
    return this.http.get<Response>(this.baseurl + '/FoodDetail/GetAllFoodDetails')
  }
  GetFoodDetail(id:string) : Observable<any> {
    return this.http.get<Response>(this.baseurl + '/FoodDetail/GetFoodDetail/' + id)
  }
  SaveFoodDetails(foodDetail:FoodDetails) : Observable<any> {
    return this.http.post<Response>(this.baseurl + '/FoodDetail/SaveFoodDetails',foodDetail)
  }
  UpdateFoodDetails(foodDetail:FoodDetails) : Observable<any> {
    return this.http.post<Response>(this.baseurl + '/FoodDetail/UpdateFoodDetails',foodDetail)
  }
}
