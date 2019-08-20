import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SideService } from '../shared/utilities/side.service';
import { ScreenMovementAnimation } from './split-screen.animation';
import { FocusMain, IFocus, INVERT_BUMP, INVERT_TOP_BOTTOM, ISide } from './split-screen.types';

@Component({
	selector: 'app-split-screen',
	templateUrl: './split-screen.component.html',
	styleUrls: ['./split-screen.component.scss'],
	animations: ScreenMovementAnimation
})
export class SplitScreenComponent implements AfterViewInit {
	focus: IFocus = 'none';
	private _menuDefaultHeight = 7.5;  // percentage value
	private _menuHeight: number = this._menuDefaultHeight;

	constructor(
		private domSanitizer: DomSanitizer
		, private sideService: SideService
		, private router: Router
	) {
	}

	ngAfterViewInit() {
		this.sideService.url$.subscribe(url => this.setFocus(this.sideService.focus, url));
	}

	setFocus(focus: IFocus, url: string) {
		console.log(focus + ' ' + url);
		if (this.focus !== focus) {
			this.focus = focus;
			if (this.focus in FocusMain) {
				this.sideService.setSideByFocus(focus as FocusMain);
			}
			this.router.navigateByUrl(url);
		}
	}

	// Bumping for desktop only
	shouldBump(cSide: 'left' | 'right'): boolean {
		return (this.focus === 'right' && cSide === 'left') || (this.focus === 'left' && cSide === 'right');
	}
	shouldResetBump(cSide: 'left' | 'right'): boolean {
		return (this.focus === 'bumpRight' && cSide === 'left') || (this.focus === 'bumpLeft' && cSide === 'right');
	}
	handleBump(callingSide: 'left' | 'right') {
		if (this.shouldBump(callingSide) || this.shouldResetBump(callingSide)) {
			this.focus = INVERT_BUMP[this.focus];
		}
	}

	// Stretching for mobile only
	// Painful but accomplished. Suggested by Alec 19.06.02
	menuStretch(side: 'top' | 'bottom'): SafeStyle {
		if (this.focus === 'top' || this.focus === 'bottom') {
			const style = INVERT_TOP_BOTTOM[this.focus] === side ? `${this._menuHeight}%` : `calc(${100 - this._menuHeight}% - 1rem`;
			return this.domSanitizer.bypassSecurityTrustStyle(style);
		}
		return null;
	}

	handleDragEnd(e: CdkDragEnd) {
		const distY: number = Math.abs(e.distance.y);
		if (distY > 50) { // px
			this.focus = INVERT_TOP_BOTTOM[this.focus];
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
