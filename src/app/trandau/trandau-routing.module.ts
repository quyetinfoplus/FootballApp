import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrandauPage } from './trandau.page';

const routes: Routes = [
  {
    path: '',
    component: TrandauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrandauPageRoutingModule {}
