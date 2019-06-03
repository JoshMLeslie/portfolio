import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const STACK_BLITZ_ICON = "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='23px' height='34px' viewBox='0 0 23 34' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Ctitle%3EPath%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg class='icon' fill='%231389FD' fill-rule='nonzero'%3E %3Cpolygon id='Path' points='0 19.9187087 9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/svg%3E";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  get STACK_BLITZ_ICON() {
    return this.domSanitizer.bypassSecurityTrustUrl(STACK_BLITZ_ICON);
  }

  constructor(
    private snackbar: MatSnackBar
    , private domSanitizer: DomSanitizer 
  ) { }

  ngOnInit() {
  }

  numCopied() {
    this.snackbar.open('Phone number copied!', '' , {duration: 3000});
  }

}
