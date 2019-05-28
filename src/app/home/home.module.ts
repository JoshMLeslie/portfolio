import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from 'app/core.module';
import { GithubModule } from 'app/github/github.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    HomeRoutingModule,
    GithubModule
  ]
})
export class HomeModule { }
