import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebHomeComponent } from './split-screen/web/home/web-home.component';
import { IndustrialHomeComponent } from './split-screen/industrial/home/industrial-home.component';
import { SuperMap } from './shared/extended-map';

const webRoutes = new SuperMap([
	['Home', { title: 'Home', url: 'web' }]
	, ['Projects', {title: 'Projects', url: 'web/projects'}]
	, ['Github', {title: 'Github', url: 'web/github'}]
]);

const routes: Routes = [
	{
		path: ''
		, children: [
			{
				path: 'web'
				, data: {
					title: 'Web Design', routes: webRoutes
				}
				, component: WebHomeComponent
				, children: [
					{
						path: 'github'
						, data: { title: 'Github' }
						, loadChildren: () => import('./split-screen/web/github/github.module').then(m => m.GithubModule)
					}
					// , {
					// 	path: 'projects'
					// }
				]
			},
			{
				path: 'industrial'
				, data: { title: 'Industrial Design' }
				, component: IndustrialHomeComponent
			},
			{
				path: 'about'
				, data: { title: 'About' }
				, loadChildren: () => import('./shared/about/about.module').then(m => m.AboutModule)
			},
			{
				path: 'resume'
				, data: { title: 'Resume' }
				, loadChildren: () => import('./shared/resume/resume.module').then(m => m.ResumeModule)
			},
		]
	},
	{
		path: '**', redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouting { }
