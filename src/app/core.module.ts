import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule
  , MatCheckboxModule
  , MatSidenavModule
} from '@angular/material';

/** They say you should only import what you need into any given module, but. */

@NgModule({
  declarations: []
  , imports: [
    CommonModule
    , MatButtonModule
    , MatCheckboxModule
    , MatSidenavModule
    , FormsModule
    , RouterModule
  ]
  , exports: [
    CommonModule
    , MatButtonModule
    , MatCheckboxModule
    , MatSidenavModule
    , FormsModule
    , RouterModule
  ]
})
export class CoreModule { }
