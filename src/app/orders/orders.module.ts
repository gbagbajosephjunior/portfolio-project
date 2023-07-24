import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { BarnsComponent } from './barns/barns.component';
import { PaloComponent } from './palo/palo.component';
import { SoloComponent } from './solo/solo.component';


@NgModule({
  declarations: [
    OrdersComponent,
    BarnsComponent,
    PaloComponent,
    SoloComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
