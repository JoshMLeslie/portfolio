import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitScreenModule } from 'app/split-screen/split-screen.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { SharedModule } from './shared';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRouting,
		SplitScreenModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
