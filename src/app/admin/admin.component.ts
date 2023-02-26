import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  items: MenuItem[];
  visibleSidebar1:any;

  visibleSidebar2:any;

  visibleSidebar3:any;

  visibleSidebar4:any;

  visibleSidebar5:any;

  constructor(private primengConfig: PrimeNGConfig
    ) {
      this.items = [
        {
            label: 'File',
            items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        }
    ];
    }

  ngOnInit() {
    this.primengConfig.ripple = true;

  }

}
