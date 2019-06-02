import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebHomeComponent } from './web-home.component';

const routes: Routes = [
  {
    path: '', component: WebHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebHomeRoutingModule { }
