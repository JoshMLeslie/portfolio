import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitScreenComponent } from './split-screen.component';
import { CoreModule } from 'app/core.module';
import { NavBarModule } from 'app/nav-bar/nav-bar.module';

@NgModule({
  declarations: [SplitScreenComponent],
  imports: [
    CommonModule
    , CoreModule
    , NavBarModule
  ],
  exports: [SplitScreenComponent]
})
export class SplitScreenModule { }
