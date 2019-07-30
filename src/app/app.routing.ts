import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustrialHomeComponent } from './split-screen/industrial/home/industrial-home.component';
import { WebHomeComponent } from './split-screen/web/home/web-home.component';

const routes: Routes = [
	{
		path: ''
		, children: [
			{
				path: 'web'
				, data: { title: 'Web Design' }
				, component: WebHomeComponent
				, children: [
					{
						path: 'github'
						, data: { title: 'Github' }
						, loadChildren: () => import('./split-screen/web/github/github.module').then(m => m.GithubModule)
					}
					, {
						path: 'projects'
						, data: { title: 'Projects' }
						, loadChildren: () => import('./split-screen/web/projects/projects.module').then(m => m.WebProjectsModule)
					}
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
