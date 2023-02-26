import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Response } from 'src/app/models/Complain/complain.model';
import { FoodCategory } from 'src/app/models/food/food.model';
import { FoodCategoryServiceService } from 'src/app/services/Food/food-category-service.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-add-food-category',
  templateUrl: './add-food-category.component.html',
  styleUrls: ['./add-food-category.component.css']
})
export class AddFoodCategoryComponent {

  baseUrl = environment.baseApiUrl;
  foodCategory:FoodCategory = {
    food_category_id:'',
    food_category_name:'ddddd',
    description:'',
    location:'',
    is_active:false,
    created_by:'',
    created_on:'',
    updated_by:'',
    updated_on:''
  }
  constructor(private primengConfig: PrimeNGConfig,private foodCategoryService:FoodCategoryServiceService){}
  ngOnInit(){

  }
  onSubmit() {
    console.log(this.foodCategory);
    this.foodCategoryService.AddFoodCategory(this.foodCategory).subscribe({
      next: (response:Response) => {
        console.log(response);
        if(response.resp){
          console.log(response.respObj)
        // this.router.navigate(['admin/restraunt'])
        }
      },
      error: response => {
        console.log(response)
        // this.router.navigate(['admin/account/signup'])
      }
    })
  }
}
