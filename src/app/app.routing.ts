import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustrialHomeComponent } from './split-screen/industrial/home/industrial-home.component';

const routes: Routes = [
	{
		path: ''
		, children: [
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
