import { NgModule } from '@angular/core';

import { IndustrialHomeRoutingModule } from './industrial-home-routing.module';
import { IndustrialHomeComponent } from './industrial-home.component';
import { CoreModule } from 'app/core.module';
import { ContactModule } from 'app/contact/contact.module';

@NgModule({
  declarations: [IndustrialHomeComponent],
  imports: [
    CoreModule
    , IndustrialHomeRoutingModule
    , ContactModule
  ]
})
export class IndustrialHomeModule { }
