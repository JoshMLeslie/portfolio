import { NgModule } from '@angular/core';

import { WebHomeRoutingModule } from './web-home.routing';
import { WebHomeComponent } from './web-home.component';
import { CoreModule } from 'app/shared/utilities/core.module';
import { GithubModule } from '../github/github.module';
import { EmailToSmsModule } from 'app/shared/email-to-sms/email-to-sms.module';
import { ContactModule } from 'app/shared/contact/contact.module';
import { WebProjectsModule } from '../projects/projects.module';

@NgModule({
	declarations: [WebHomeComponent],
	imports: [
		CoreModule
		, WebHomeRoutingModule
		, GithubModule
		, EmailToSmsModule
		, ContactModule
		, WebProjectsModule
	]
})
export class WebHomeModule { }
