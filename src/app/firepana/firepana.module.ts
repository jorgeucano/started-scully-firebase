import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirepanaRoutingModule } from './firepana-routing.module';
import { FireblogComponent } from './fireblog/fireblog.component';


@NgModule({
  declarations: [FireblogComponent],
  imports: [
    CommonModule,
    FirepanaRoutingModule
  ]
})
export class FirepanaModule { }
