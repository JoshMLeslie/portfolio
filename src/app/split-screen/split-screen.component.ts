import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ScreenMovementAnimation } from './split-screen.animation';

type IFocus = 'none' | 'left' | 'right' | 'bumpLeft' | 'bumpRight' | 'top' | 'bottom' | 'bumpTop' | 'bumpBottom';

const BUMP_CONFIG: {[focus: string]: IFocus} = {
  right: 'bumpLeft',
  bumpRight: 'left',
  left: 'bumpRight',
  bumpLeft: 'right'
};

@Component({
  selector: 'app-split-screen',
  templateUrl: './split-screen.component.html',
  styleUrls: ['./split-screen.component.scss'],
  animations: ScreenMovementAnimation
})
export class SplitScreenComponent {
  focus: IFocus = 'none';
  setFocus(val: IFocus) {
    if (this.focus === 'none') { this.focus = val; }
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

  // Bumping for desktop only
  shouldBump(cSide: 'left' | 'right'): boolean {
    return (this.focus === 'right' && cSide === 'left') || (this.focus === 'left' && cSide === 'right');
  }
  shouldResetBump(cSide: 'left' | 'right'): boolean {
    return (this.focus === 'bumpRight' && cSide === 'left') || (this.focus === 'bumpLeft' && cSide === 'right');
  }
  handleBump(callingSide: 'left' | 'right') {
    if (this.shouldBump(callingSide) || this.shouldResetBump(callingSide)) {
      this.focus = BUMP_CONFIG[this.focus];
    }
  }

  // Stretching for mobile only
  // Painful but accomplished. Suggested by Alec 19.06.02
  topBottomInverse(side: IFocus | 'top' | 'bottom') {
    const flip = {
      top: 'bottom',
      bottom: 'top'
    };
    return flip[side];
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
