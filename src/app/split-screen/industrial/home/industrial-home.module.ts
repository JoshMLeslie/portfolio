import { NgModule } from '@angular/core';

import { IndustrialHomeRoutingModule } from './industrial-home-routing.module';
import { IndustrialHomeComponent } from './industrial-home.component';
import { CoreModule } from 'app/shared/core.module';
import { ContactModule } from 'app/shared/contact/contact.module';
import { EmailToSmsModule } from 'app/shared/email-to-sms/email-to-sms.module';

@NgModule({
	declarations: [IndustrialHomeComponent],
	imports: [
		CoreModule
		, IndustrialHomeRoutingModule
		, ContactModule
		, EmailToSmsModule
	]
})
export class IndustrialHomeModule { }
