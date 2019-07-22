import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitScreenModule } from 'app/split-screen//split-screen.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CoreModule } from './core.module';
import { WindowService } from 'app/shared/window.service';
import { XRModule } from 'app/shared/xr/xr.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRouting,
		CoreModule,
		SplitScreenModule,
		XRModule
	],
	providers: [WindowService],
	bootstrap: [AppComponent]
})
export class AppModule { }
