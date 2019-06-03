import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyToClipboardDirective } from './copy-to-clipboard.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , CopyToClipboardDirective
  ],
  exports: [
    CopyToClipboardDirective
  ]
})
export class DirectivesModule { }
