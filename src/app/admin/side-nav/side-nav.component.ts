import { Component } from '@angular/core';

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
            label: 'Food',
            icon: 'pi pi-pw pi-file',
            items: [{
                    label: 'Food Category',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Add', icon: 'pi pi-fw pi-user-plus',routerLink:['food/food-category/add']},
                        {label: 'Update', icon: 'pi pi-fw pi-filter',routerLink:['food/food-category/update']},
                        {label: 'List', icon: 'pi pi-fw pi-filter',routerLink:['food/food-category/list']}
                    ]
                },
                {
                  label: 'Food Details',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Add', icon: 'pi pi-fw pi-user-plus',routerLink:['food/food-details/add']},
                      {label: 'Update', icon: 'pi pi-fw pi-filter',routerLink:['food/food-details/update']},
                      {label: 'List', icon: 'pi pi-fw pi-filter',routerLink:['food/food-details/list']}
                  ]}
            ]
        },
        {
            label: 'Order',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'List', icon: 'pi pi-fw pi-trash',routerLink:['order/list']},
                {label: 'Update', icon: 'pi pi-fw pi-refresh',routerLink:['order/update']}
            ]
        },
        {
            label: 'Report',
            icon: 'pi pi-fw pi-question'
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-cog'
        }
    ];
    }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }
}
