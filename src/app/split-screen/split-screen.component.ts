import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { CdkDragMove, CdkDragEnd } from '@angular/cdk/drag-drop';

import { ScreenMovementAnimation } from './split-screen.animation';

type IFocus = 'none' | 'left' | 'right' | 'bumpLeft' | 'bumpRight' |
                        'top' | 'bottom' | 'bumpTop' | 'bumpBottom';


@Component({
  selector: 'app-split-screen',
  templateUrl: './split-screen.component.html',
  styleUrls: ['./split-screen.component.scss'],
  animations: ScreenMovementAnimation
})
export class SplitScreenComponent implements OnInit {
  _focus: IFocus = 'none';
  get focus(): IFocus {
    return this._focus;
  }
  set focus(val: IFocus) {
    this._focus = val;
  }
  setFocus(val: IFocus) {
    if (this._focus === 'none') {
      this._focus = val;
    }
  }

  _menuDefaultHeight = 7.5;
  _menuHeight: number = this._menuDefaultHeight; // percentage value
  menuStretch = (side: 'top' | 'bottom'): SafeStyle => {
    let style: string;

    if (this.focus === 'top' || this.focus === 'bottom') {
      style = this.topBottomInverse(this.focus) === side ? `${this._menuHeight}%` : `calc(${100 - this._menuHeight}% - 1rem`;
    } else {
      return null;
    }

    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  handleBump(callingSide: 'left' | 'right') {
    const shouldBump = (cSide: 'left' | 'right'): boolean => (
      (this.focus === 'right' && cSide === 'left') || (this.focus === 'left' && cSide === 'right')
    );

    const shouldResetBump = (cSide: 'left' | 'right'): boolean => (
      (this.focus === 'bumpRight' && cSide === 'left') || (this.focus === 'bumpLeft' && cSide === 'right')
    );

    if (shouldBump(callingSide) || shouldResetBump(callingSide)) {
      switch (this.focus) {
        case 'right':
          this.focus = 'bumpLeft';
          break;
        case 'bumpRight':
          // moving into 'right' => 'bumpRight', then moving into 'left', reset to 'left'
          this.focus = 'left';
          break;
        case 'left':
          this.focus = 'bumpRight';
          break;
        case 'bumpLeft':
          // moving into 'left' => 'bumpLeft', then moving into 'right', reset to 'right'
          this.focus = 'right';
          break;
      }
    }
  }

  // Painful but accomplished. Suggested by Alec 19.06.02
  topBottomInverse(side: IFocus | 'top' | 'bottom') {
    switch (side) {
      case 'top':
        return 'bottom';
      case 'bottom':
        return 'top';
    }
  }

  handleDragEnd(e: CdkDragEnd) {
    const distY: number = Math.abs(e.distance.y);
    if (distY > 50) { // px
      this.focus = this.topBottomInverse(this.focus);
    }

    this._menuHeight = this._menuDefaultHeight; // reset the bar value for the current menu / new menu.
  }
  handleDrag(e: CdkDragMove) {
    const distY: number = Math.abs(e.distance.y);
    if (distY < 60) { // px limit
      const newHeight = distY / 4;
      this._menuHeight = newHeight >= this._menuDefaultHeight ? newHeight : this._menuDefaultHeight ; // scaling reduction
    }

    e.source.reset(); // reset position of element on page
  }
}
