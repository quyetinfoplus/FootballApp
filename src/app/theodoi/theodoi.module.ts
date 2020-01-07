import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheodoiPageRoutingModule } from './theodoi-routing.module';

import { TheodoiPage } from './theodoi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheodoiPageRoutingModule
  ],
  declarations: [TheodoiPage]
})
export class TheodoiPageModule {}
