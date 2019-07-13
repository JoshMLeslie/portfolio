import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { WebHomeModule } from 'app/split-screen/web/home/web-home.module';
import { AboutModule } from 'app/shared/about/about.module';
import { ResumeModule } from 'app/shared/resume/resume.module';
import { SplitScreenModule } from 'app/split-screen//split-screen.module';

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
    WebHomeModule,
    AboutModule,
    ResumeModule,
    SplitScreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
