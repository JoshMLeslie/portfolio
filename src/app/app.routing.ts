import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: ''
		, children: [
			{
				path: 'web'
				, data: { title: 'Web Design' }
				, loadChildren: () => import('./split-screen/web/home/web-home.module').then(m => m.WebHomeModule)
			},
			{
				path: 'industrial'
				, data: { title: 'Industrial Design' }
				, loadChildren: () => import('./split-screen/industrial/home/industrial-home.module').then(m => m.IndustrialHomeModule)
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
