import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuItem, PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  items: MenuItem[];
  visibleSidebar1:any;
  constructor(private primengConfig: PrimeNGConfig
    ) {
      this.items = [
        {
          label:'Dasboard',
          routerLink:['dashboard']
        },
        {
            label: 'Food',
            items: [{
                    label: 'Food Category',
                    items: [
                        {label: 'Add Food Category', routerLink:['food/food-category/add']},
                        // {label: 'Update', icon: 'pi pi-fw pi-filter',routerLink:['food/food-category/update']},
                        {label: 'Food Category List', routerLink:['food/food-category/list']}
                    ]
                },
                {
                  label: 'Food Details',
                  items: [
                      {label: 'Add Food Details', routerLink:['food/food-details/add']},
                      // {label: 'Update', icon: 'pi pi-fw pi-filter',routerLink:['food/food-details/update']},
                      {label: 'Food Details List', routerLink:['food/food-details/list']}
                  ]}
            ]
        },
        {
            label: 'Order',
            items: [
                {label: 'Order List',routerLink:['order/list']},
                // {label: 'Update', icon: 'pi pi-fw pi-refresh',routerLink:['order/update']}
            ]
        },
        {
            label: 'Report'
        },
        {
            label: 'Profile',
            routerLink:['profile']
        }
    ];
    }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }
}
