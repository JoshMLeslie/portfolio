import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebProjectsComponent } from './projects.component';

const routes: Routes = [
	// {
	// 	path: '', component: WebProjectsComponent
	// }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WebProjectsRoutingModule { }
