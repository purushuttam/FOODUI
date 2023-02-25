import { Component} from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

import { ProductService } from 'src/app/services/productservice';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent {

  p1:Product= {id:"1",code:'123',name:'product 1',description:'description',price:123,quantity:12,inventoryStatus:'full',category:'12',image:'ff',rating:5}
  p2:Product= {id:"2",code:'321',name:'product 2',description:'description',price:123,quantity:12,inventoryStatus:'full',category:'12',image:'ff',rating:5}
  p3:Product= {id:"2",code:'213',name:'product 3',description:'description',price:123,quantity:12,inventoryStatus:'full',category:'12',image:'ff',rating:5}
  products: Product[]=[];

  ngOnInit() {
    this.products.push(this.p1)
    }
}
