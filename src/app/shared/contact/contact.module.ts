import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { CoreModule } from 'app/core.module';

@NgModule({
	declarations: [ContactComponent],
	imports: [
		CommonModule
		, CoreModule
	],
	exports: [ContactComponent]
})
export class ContactModule { }
