import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptocoinListComponent } from './cryptocoin-list/cryptocoin-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: CryptocoinListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptocoinModuleRoutingModule { }
