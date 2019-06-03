import { NgModule } from '@angular/core';

import { WebHomeRoutingModule } from './web-home-routing.module';
import { WebHomeComponent } from './web-home.component';
import { CoreModule } from 'app/core.module';
import { GithubModule } from '../github/github.module';
import { EmailToSmsModule } from 'app/email-to-sms/email-to-sms.module';

@NgModule({
  declarations: [WebHomeComponent],
  imports: [
    CoreModule,
    WebHomeRoutingModule,
    GithubModule
    , EmailToSmsModule
  ]
})
export class WebHomeModule { }
