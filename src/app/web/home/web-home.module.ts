import { NgModule } from '@angular/core';

import { WebHomeRoutingModule } from './web-home-routing.module';
import { WebHomeComponent } from './web-home.component';
import { CoreModule } from 'app/core.module';
import { GithubModule } from '../github/github.module';

@NgModule({
  declarations: [WebHomeComponent],
  imports: [
    CoreModule,
    WebHomeRoutingModule,
    GithubModule
  ]
})
export class WebHomeModule { }
