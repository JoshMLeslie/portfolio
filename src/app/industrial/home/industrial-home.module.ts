import { NgModule } from '@angular/core';

import { IndustrialHomeRoutingModule } from './industrial-home-routing.module';
import { IndustrialHomeComponent } from './industrial-home.component';
import { CoreModule } from 'app/core.module';

@NgModule({
  declarations: [IndustrialHomeComponent],
  imports: [
    CoreModule,
    IndustrialHomeRoutingModule,
  ]
})
export class IndustrialHomeModule { }
