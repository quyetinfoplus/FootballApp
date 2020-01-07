import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrandauPageRoutingModule } from './trandau-routing.module';

import { TrandauPage } from './trandau.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    TrandauPageRoutingModule
  ],
  declarations: [TrandauPage]
})
export class TrandauPageModule {}
