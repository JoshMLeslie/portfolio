import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { CoreModule } from '../core.module';
import { RotaryMenuModule } from 'app/rotary-menu/rotary-menu.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CoreModule
    , RotaryMenuModule
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
