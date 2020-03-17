import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FireblogComponent } from './fireblog/fireblog.component';


const routes: Routes = [{
  path: ':id', component: FireblogComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirepanaRoutingModule { }
