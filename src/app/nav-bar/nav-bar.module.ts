import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { CoreModule } from '../core.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CoreModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
