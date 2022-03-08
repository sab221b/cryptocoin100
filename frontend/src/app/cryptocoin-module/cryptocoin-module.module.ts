import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptocoinModuleRoutingModule } from './cryptocoin-module-routing.module';
import { CryptocoinListComponent } from './cryptocoin-list/cryptocoin-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CryptocoinService } from '../services/cryptocoin.service';


@NgModule({
  declarations: [
    CryptocoinListComponent,
  ],
  providers: [CryptocoinService],
  imports: [
    CommonModule,
    NgxDatatableModule,
    CryptocoinModuleRoutingModule
  ]
})
export class CryptocoinModuleModule { }
