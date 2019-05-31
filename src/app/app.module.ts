import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { SplitScreenModule } from './split-screen/split-screen.module';

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
    HomeModule,
    AboutModule,
    ResumeModule,
    SplitScreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
