import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitScreenComponent } from './split-screen.component';
import { CoreModule } from 'app/core.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NavBarModule } from 'app/nav-bar/nav-bar.module';

@NgModule({
  declarations: [SplitScreenComponent],
  imports: [
    CommonModule
    , CoreModule
    , NavBarModule
    , DragDropModule
  ],
  exports: [SplitScreenComponent]
})
export class SplitScreenModule { }
