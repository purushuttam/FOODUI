import { Component , OnInit} from '@angular/core';
import { MessageService } from 'primeng/api';
import { FoodCategory } from 'src/app/models/food/food.model';
import { FoodCategoryServiceService } from 'src/app/services/Food/food-category-service.service';

@Component({
  selector: 'app-food-category-list',
  templateUrl: './food-category-list.component.html',
  styleUrls: ['./food-category-list.component.css']
})
export class FoodCategoryListComponent implements OnInit {
  first = 0;
  rows = 1;
  foodCategory:FoodCategory[] = [];
  constructor(private foodCategoryService:FoodCategoryServiceService,
    private messageService:MessageService){

  }

  ngOnInit(){
    this.foodCategoryService.GetAllFoodCategory().subscribe({
      next: response => {
        console.log(response)
        if(response.resp){
          console.log(response.respObj)
          this.foodCategory = response.respObj;
        }
      },
      error :response => {
        console.log(response);
      }
    })
  }
  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.foodCategory ? this.first === (this.foodCategory.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.foodCategory ? this.first === 0 : true;
}
Delete(id:string) {
  // console.log(id);
  this.foodCategoryService.DeleteFoodCategory(id).subscribe({
    next:(response:any) => {
      // console.log(id);
      if(response.resp){
        this.messageService.add({severity:'success', summary:'Food Category', detail:'Deleted Successfuly'});
        this.foodCategoryService.GetAllFoodCategory().subscribe({
          next: response => {
            console.log(response)
            if(response.resp){
              console.log(response.respObj)
              this.foodCategory = response.respObj;
            }
          },
          error :response => {
            console.log(response);
          }
        })
      }
      else{
        this.messageService.add({severity:'Error', summary:'Food Category', detail:'Something Went wrong'});
      }
    },
    error :response => {
      console.log(response);
      this.messageService.add({severity:'Error', summary:'Food Category', detail:'Something Went wrong'});
    }
  })
}
}
