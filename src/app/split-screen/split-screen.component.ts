import { Component, OnInit} from '@angular/core';
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


  _menuStretch: number = 0;
  menuStretch = (side: 'top' | 'bottom'): number => {
    return this.topBottomInverse(this.focus) === side ? this._menuStretch : 0;
    /** TODO: sanitizing unsafe style value */
    // return this.topBottomInverse(this.focus) === side ? `${this._menuStretch}%` : `calc(${100 - this._menuStretch}% - 1rem`;
  }

  constructor() { }

  ngOnInit() {
  }

  shouldBump(callingSide: 'left' | 'right'): boolean {
    return (this.focus === 'right' && callingSide === 'left') ||
      (this.focus === 'left' && callingSide === 'right');
  }

  shouldResetBump(callingSide: 'left' | 'right'): boolean {
    return (this.focus === 'bumpRight' && callingSide === 'left') ||
      (this.focus === 'bumpLeft' && callingSide === 'right');
  }

  handleBump(callingSide: 'left' | 'right') {
    if (this.shouldBump(callingSide) || this.shouldResetBump(callingSide)) {
      switch (this.focus) {
        case 'right':
          this.focus = 'bumpLeft';
          break;
        case 'bumpRight':
          // moving into 'right' => 'bumpRight', then moving into 'left', reset to 'left'
          this.focus = 'left'
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

  // Mobile handling of top-bottom split
  // Painful but accomplished. Suggested by Alec 19.06.02
  topBottomInverse(side: IFocus | 'top' | 'bottom') {
    switch (side) {
      case 'top':
        return 'bottom';
        break;
      case 'bottom':
        return 'top';
        break;
    }
  }

  handleDragEnd(e: CdkDragEnd) {
    const distY: number = Math.abs(e.distance.y);
    if (distY > 50) { // px
      this.focus = this.topBottomInverse(this.focus);
    } else {
      this._menuStretch = 7.5;
    }
  }
  handleDrag(e: CdkDragMove) {
    const distY: number = Math.abs(e.distance.y);
    if (distY > 50) { // px
      this.focus = this.topBottomInverse(this.focus);
    } else {
      this._menuStretch = distY / 2; // scaling reduction
    }

    e.source.reset(); // reset position of element on page
  }
}