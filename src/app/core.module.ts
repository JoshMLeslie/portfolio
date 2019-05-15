import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule
  , MatCheckboxModule
  , MatSidenavModule
} from '@angular/material';


/** They say you should only import what you need into any given module, but.**/

@NgModule({
  declarations: []
  , imports: [
    CommonModule
    , MatButtonModule
    , MatCheckboxModule
    , MatSidenavModule
    , FormsModule
    , BrowserAnimationsModule
  ]
  , exports: [
    CommonModule
    , MatButtonModule
    , MatCheckboxModule
    , MatSidenavModule
    , FormsModule
    , BrowserAnimationsModule
  ]
})
export class CoreModule { }
