import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustrialHomeComponent } from './industrial-home.component';

const routes: Routes = [
	{
		path: '', component: IndustrialHomeComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class IndustrialHomeRoutingModule { }
