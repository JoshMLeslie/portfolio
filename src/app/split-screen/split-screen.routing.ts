import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: ''
	, children: [
			{
				path: 'web'
				, data: { title: 'Web Design' }
				, loadChildren: () => import('./web/web.module').then(m => m.WebModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SplitScreenRoutingModule { }
