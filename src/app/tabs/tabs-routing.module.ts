import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'navi',
    component: TabsPage,
    children: [
      {
        path: 'trandau',
        children: [
          {
            path: '',
            loadChildren: () => import('../trandau/trandau.module').then(m => m.TrandauPageModule)
          }
        ]
      },
      {
        path: 'theodoi',
        children: [
          {
            path: '',
            loadChildren: () => import('../theodoi/theodoi.module').then(m => m.TheodoiPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/navi/trandau',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/navi/trandau',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
