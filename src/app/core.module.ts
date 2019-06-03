import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule
  , MatCheckboxModule
  , MatSidenavModule
  , MatIconModule
  , MatCardModule
  , MatTabsModule
  , MatToolbarModule
  , MatSelectModule
  , MatFormFieldModule
  , MatInputModule
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
    , ReactiveFormsModule
    , RouterModule
    , FlexLayoutModule
    , MatIconModule
    , MatCardModule
    , MatTabsModule
    , MatToolbarModule
    , MatSelectModule
    , MatFormFieldModule
    , MatInputModule
  ]
  , exports: [
    CommonModule
    , MatButtonModule
    , MatCheckboxModule
    , MatSidenavModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule
    , FlexLayoutModule
    , MatIconModule
    , MatCardModule
    , MatTabsModule
    , MatToolbarModule
    , MatSelectModule
    , MatFormFieldModule
    , MatInputModule
  ]
})
export class CoreModule { }
