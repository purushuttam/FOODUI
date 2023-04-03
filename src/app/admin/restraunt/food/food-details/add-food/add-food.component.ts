import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import { FoodDetails } from 'src/app/models/food/food.model';
import { FoodCategoryServiceService } from 'src/app/services/Food/food-category-service.service';
import { FoodDetailsService } from 'src/app/services/Restraunt/food-details.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  foodForm!: FormGroup;
  foodCategoryList:any[] = []
  foodTypes: any[] = [{name:'Veg',key:'VEG'},{name:'Non-Veg',key:'NON-VEG'}]

  constructor(private foodCategoryService:FoodCategoryServiceService,
    private foodDetailService:FoodDetailsService,
    private messageService:MessageService,
    private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.foodCategoryService.GetAllFoodCategory().subscribe({
      next:(response:Response) => {
        if(response.resp){
          this.foodCategoryList = response.respObj;
          console.log(this.foodCategoryList)
          console.log(this.foodCategoryList)
        }
      },
      error:(response:any) => {
        console.log(response);
      }
    });
    this.foodForm = this.fb.group({
      food_detail_id: [''],
      food_category_id: ['', Validators.required],
      reastraunt_id: [''],
      food_name: ['', Validators.required],
      description: ['', Validators.required],
      food_type: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      is_active: [false],
      created_on: ['2023-02-28T11:12:28.406'],
      created_by: [''],
      updated_on: ['2023-02-28T11:12:28.406'],
      updated_by: ['']
    });

  }
  onSubmit(){
    console.log(this.foodForm.value)
    this.foodDetailService.SaveFoodDetails(this.foodForm.value).subscribe({
      next:(response:Response) => {
        if(response.resp){
          console.log(response);
          this.messageService.add({severity:'success', summary:'Food Details', detail:'Saved Successfuly'});
        }
        else{
          console.log(response);
          this.messageService.add({severity:'error', summary:'Food Details', detail:response.respMsg});
        }
      },
     error: response => {
      console.log(response);
      this.messageService.add({severity:'error', summary:'Food Details', detail:response.respMsg});
     }
    })
  }
}
