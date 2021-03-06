import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CoreModule } from 'app/shared/utilities/core.module';

@NgModule({
	declarations: [AboutComponent],
	imports: [
		CoreModule,
		AboutRoutingModule
	]
})
export class AboutModule { }
