import { Component, OnInit } from '@angular/core';

import { ScreenMovementAnimation } from './split-screen.animation';

type IFocus = 'none' | 'left' | 'right' | 'bumpLeft' | 'bumpRight';


@Component({
  selector: 'app-split-screen',
  templateUrl: './split-screen.component.html',
  styleUrls: ['./split-screen.component.scss'],
  animations: ScreenMovementAnimation
})
export class SplitScreenComponent implements OnInit {
  // exploded 'focus' for debugging
  private _focus: IFocus = 'none';
  public set focus(move: IFocus) {
    this._focus = move;
    console.log(move);
  }
  public get focus(): IFocus { return this._focus; }

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
}