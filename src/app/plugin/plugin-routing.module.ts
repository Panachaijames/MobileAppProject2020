import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PluginPage } from './plugin.page';

const routes: Routes = [
  {
    path: '',
    component: PluginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PluginPageRoutingModule {}
