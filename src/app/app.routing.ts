import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustrialHomeComponent } from './split-screen/industrial/home/industrial-home.component';
import { SideResolver } from './shared/utilities/side.resolver';

const routes: Routes = [
	{
		path: ''
		, resolve: {
			side: SideResolver
		}
		, children: [
			{
				path: 'industrial'
				, data: { title: 'Industrial Design' }
				, loadChildren: () => import('./split-screen/industrial/home/industrial-home.module').then(m => m.IndustrialHomeModule)
				, resolve: {
					side: SideResolver
				}
			},
			{
				path: 'web'
				, data: { title: 'Web Design' }
				, loadChildren: () => import('./split-screen/web/web.module').then(m => m.WebModule)
				, resolve: {
					side: SideResolver
				}
			},
			{
				path: 'about'
				, data: { title: 'About' }
				, loadChildren: () => import('./shared/about/about.module').then(m => m.AboutModule)
				, resolve: {
					side: SideResolver
				}
			},
			{
				path: 'resume'
				, data: { title: 'Resume' }
				, loadChildren: () => import('./shared/resume/resume.module').then(m => m.ResumeModule)
				, resolve: {
					side: SideResolver
				}
			},
		]
	},
	{
		path: '**'
		, redirectTo: ''
		, resolve: {
			side: SideResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouting { }
