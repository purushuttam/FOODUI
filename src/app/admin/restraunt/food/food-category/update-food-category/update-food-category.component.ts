import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import { FoodCategory } from 'src/app/models/food/food.model';
import { FoodCategoryServiceService } from 'src/app/services/Food/food-category-service.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-update-food-category',
  templateUrl: './update-food-category.component.html',
  styleUrls: ['./update-food-category.component.css']
})
export class UpdateFoodCategoryComponent {
  baseUrl = environment.baseApiUrl;
  foodCategory:FoodCategory = {
    food_category_id:'',
    food_category_name:'',
    description:'',
    location:'',
    is_active:false,
    created_by:'',
    created_on:'2023-02-28T11:12:28.406',
    updated_by:'',
    updated_on:'2023-02-28T11:12:28.406'
  }
  constructor(
    private primengConfig: PrimeNGConfig,
    private foodCategoryService:FoodCategoryServiceService,
    private router:Router,
    private messageService:MessageService,
    private route: ActivatedRoute){
      // this.foodCategoryService.GetFoodCategoryById('').subscribe({
      //   next: (response:Response)
      // })
    }
    id:any;

    ngOnInit() : void{
      this.route.paramMap.subscribe((params:
        ParamMap) => {
          this.id = params.get('id');
        })
        this.foodCategoryService.GetFoodCategoryById(this.id).subscribe({
          next: (response:any) =>{
            console.log(response);
            if(response.resp){
              console.log(response.respObj);
              this.foodCategory = response.respObj;
            }
          }
        })
    }
    onSubmit() {
      console.log(this.foodCategory);
      this.foodCategoryService.UpdateFoodCategory(this.foodCategory).subscribe({
        next: (response:Response) => {
          console.log(response);
          if(response.resp){
            console.log(response.respObj)
            this.messageService.add({severity:'success', summary:'Food Category', detail:'Update Successfuly'});

            // this.router.navigate(['admin/restraunt/food/food-category/list'])
          }
        },
        error: response => {
          console.log(response)
          // this.router.navigate(['admin/account/signup'])
        }
      })
    }
}
