import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrandauPageRoutingModule } from './trandau-routing.module';

import { TrandauPage } from './trandau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrandauPageRoutingModule
  ],
  declarations: [TrandauPage]
})
export class TrandauPageModule {}
