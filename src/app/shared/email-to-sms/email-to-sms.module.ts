import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'app/core.module';
import { EmailToSmsComponent } from './email-to-sms.component';
import { EmailToSmsService } from './email-to-sms.service';

@NgModule({
	declarations: [EmailToSmsComponent],
	imports: [
		CommonModule
		, CoreModule
	],
	providers: [EmailToSmsService],
	exports: [EmailToSmsComponent]
})
export class EmailToSmsModule { }
