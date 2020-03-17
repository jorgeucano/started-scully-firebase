import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'blog', loadChildren: 
    () => import('./blog/blog.module').then(m => m.BlogModule) 
  },
  { 
    path: 'firepana', loadChildren: 
    () => import('./firepana/firepana.module').then(m => m.FirepanaModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
