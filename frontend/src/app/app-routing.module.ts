import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crypto',
    pathMatch: 'full'
  },
  {
    path: 'crypto',
    loadChildren: () => import('./cryptocoin-module/cryptocoin-module.module').then(m => m.CryptocoinModuleModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
