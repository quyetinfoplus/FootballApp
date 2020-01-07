import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheodoiPage } from './theodoi.page';

const routes: Routes = [
  {
    path: '',
    component: TheodoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheodoiPageRoutingModule {}
