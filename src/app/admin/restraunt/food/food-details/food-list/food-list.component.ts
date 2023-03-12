import { Component,OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Response } from 'src/app/models/comman/comman.model';
import { FoodDetailsService } from 'src/app/services/Restraunt/food-details.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
foodDetails: any[] = [];

constructor(private messageService:MessageService,
  private foodDetailsService:FoodDetailsService){

}

ngOnInit(): void{
  this.foodDetailsService.GetAllFoodDetailsByRestrauntId().subscribe({
    next:(response:Response) => {
      if(response.resp){
        this.foodDetails = response.respObj;
        this.messageService.add({severity:'success', summary:'Food Details', detail:'Fetch Successfully'});
      }
      else{
        console.log(response.respMsg);
        this.messageService.add({severity:'error', summary:'Food Details', detail:response.respMsg});
      }
    },
    error: response => {
      console.log(response);
      this.messageService.add({severity:'error', summary:'Food Details', detail:response.status});
    }
  })
}

}
