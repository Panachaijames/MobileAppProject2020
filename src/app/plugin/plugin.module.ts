import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PluginPageRoutingModule } from './plugin-routing.module';

import { PluginPage } from './plugin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PluginPageRoutingModule
  ],
  declarations: [PluginPage]
})
export class PluginPageModule {}
