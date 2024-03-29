import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import { FoodCategory } from 'src/app/models/food/food.model';
import { FoodCategoryServiceService } from 'src/app/services/Food/food-category-service.service';
import { environment } from 'src/environment/environment';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-food-category',
  templateUrl: './add-food-category.component.html',
  styleUrls: ['./add-food-category.component.css'],
})
export class AddFoodCategoryComponent {
  baseUrl = environment.baseApiUrl;
  foodCategoryForm!: FormGroup;
  text2: any;
  id: any;
  foodCategory!: FoodCategory;
  constructor(
    private primengConfig: PrimeNGConfig,
    private foodCategoryService: FoodCategoryServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.foodCategoryForm = this.fb.group({
      food_category_id: [''],
      food_category_name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      is_active: [false],
      created_by: [''],
      created_on: ['2023-02-28T11:12:28.406'],
      updated_by: [''],
      updated_on: ['2023-02-28T11:12:28.406'],
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log(' id ' + this.id);
    });
    this.foodCategoryService.GetFoodCategoryById(this.id).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.resp) {
          this.foodCategory = response.respObj;
          this.foodCategoryForm.setValue({
            food_category_id: this.foodCategory.food_category_id,
            food_category_name: this.foodCategory.food_category_name,
            description: this.foodCategory.description,
            location: this.foodCategory.location,
            is_active: this.foodCategory.is_active,
            created_by: this.foodCategory.created_by,
            created_on: this.foodCategory.created_on,
            updated_by: this.foodCategory.updated_by,
            updated_on: this.foodCategory.updated_on,
          });
        }
      },
    });
  }

  onSubmit() {
    if (this.foodCategory == null) {
      console.log('Add food Category!');
      console.log(this.foodCategoryForm.value);
      this.foodCategoryService
        .AddFoodCategory(this.foodCategoryForm.value)
        .subscribe({
          next: (response: Response) => {
            console.log(response);
            if (response.resp) {
              console.log(response.respObj);
              this.messageService.add({
                severity: 'success',
                summary: 'Food Category',
                detail: 'Saved Successfuly',
              });

              // this.router.navigate(['admin/restraunt/food/food-category/list'])
            }
          },
          error: (response) => {
            console.log(response);
            // this.router.navigate(['admin/account/signup'])
          },
        });
    } else {
      console.log('Food Category update');
      console.log(this.foodCategoryForm.value);
      this.foodCategoryService.UpdateFoodCategory(this.foodCategoryForm.value).subscribe({
        next: (response: Response) => {
          console.log(response);
          if (response.resp) {
            console.log(response.respObj);
            this.messageService.add({
              severity: 'success',
              summary: 'Food Category',
              detail: 'Update Successfuly',
            });

            // this.router.navigate(['admin/restraunt/food/food-category/list'])
          }
        },
        error: (response) => {
          console.log(response);
          // this.router.navigate(['admin/account/signup'])
        },
      });
    }
  }
}
