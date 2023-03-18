import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { Product } from 'src/app/models/product';
import { AuthServiceService } from 'src/app/services/Auth/auth-service.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
})
export class ContentsComponent {
  ngOnInit() {
    console.log('conetents');
  }
}
