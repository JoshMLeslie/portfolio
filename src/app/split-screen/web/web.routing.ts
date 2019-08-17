import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebHomeComponent } from './home/web-home.component';


const routes: Routes = [
	{
		path: 'web'
		, data: { title: 'Web Design' }
		, component: WebHomeComponent
		, children: [
			{
				path: 'github'
				, data: { title: 'Github' }
				, loadChildren: () => import('./github/github.module').then(m => m.GithubModule)
			}
			, {
				path: 'projects'
				, data: { title: 'Projects' }
				, loadChildren: () => import('./projects/projects.module').then(m => m.WebProjectsModule)
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WebRoutingModule { }
