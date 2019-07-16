import { NgModule } from '@angular/core';

import { WebHomeRoutingModule } from './web-home-routing.module';
import { WebHomeComponent } from './web-home.component';
import { CoreModule } from 'app/core.module';
import { GithubModule } from '../github/github.module';
import { EmailToSmsModule } from 'app/shared/email-to-sms/email-to-sms.module';
import { ContactModule } from 'app/shared/contact/contact.module';

@NgModule({
	declarations: [WebHomeComponent],
	imports: [
		CoreModule
		, WebHomeRoutingModule
		, GithubModule
		, EmailToSmsModule
		, ContactModule
	]
})
export class WebHomeModule { }
