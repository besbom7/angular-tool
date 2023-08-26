import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes | any = [
  { path: 'lazyload', loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyloadModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
