import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-restraunts',
  templateUrl: './restraunts.component.html',
  styleUrls: ['./restraunts.component.css']
})
export class RestrauntsComponent implements OnInit{
  ngOnInit(): void {
    console.log('Restraunt');
  }

}
