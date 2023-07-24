import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarnsComponent } from './barns/barns.component';
import { OrdersComponent } from './orders.component';
import { PaloComponent } from './palo/palo.component';
import { SoloComponent } from './solo/solo.component';

const routes: Routes = [
  {
    path: 'orders', children: [
      { path: '', component: OrdersComponent },
      { path: 'barns', component: BarnsComponent },
      { path: 'solo', component: PaloComponent },
      { path: 'palo', component: SoloComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
