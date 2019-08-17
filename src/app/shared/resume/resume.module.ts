import { NgModule } from '@angular/core';

import { CoreModule } from 'app/shared/utilities/core.module';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';

@NgModule({
	declarations: [ResumeComponent],
	imports: [
		CoreModule,
		ResumeRoutingModule
	]
})
export class ResumeModule { }
