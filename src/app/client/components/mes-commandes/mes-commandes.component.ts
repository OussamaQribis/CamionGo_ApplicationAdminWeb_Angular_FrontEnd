import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mes-commandes',
  standalone: false,
  templateUrl: './mes-commandes.component.html',
  styleUrl: './mes-commandes.component.scss'
})
export class MesCommandesComponent {
  items: MenuItem[] | undefined;
  routeItems: MenuItem[] = [];

  constructor(){
    
  }

  ngOnInit() {
      this.items = [
          { label: 'New ', icon: 'pi pi-plus' },
          { label: 'Search', icon: 'pi pi-search' }
      ];
      this.routeItems = [
        { label: 'Personal', routerLink: 'personal' },
        { label: 'Seat', routerLink: 'seat' },
        { label: 'Payment', routerLink: 'payment' },
        { label: 'Confirmation', routerLink: 'confirmation' },
    ];
  }
}
