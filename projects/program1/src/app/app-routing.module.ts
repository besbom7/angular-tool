import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lazyload', loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyloadModule) },
  { path: 'lazyload2', loadChildren: () => import('./lazyload2/lazyload2.module').then(m => m.Lazyload2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
