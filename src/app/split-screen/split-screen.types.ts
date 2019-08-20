export type ISide = 'web' | 'industrial';
export type IFocus = 'none' | 'left' | 'right' | 'bumpLeft' | 'bumpRight' | 'top' | 'bottom' | 'bumpTop' | 'bumpBottom';
export enum FocusMain {
	left = 'left'
	, right = 'right'
	, top = 'top'
	, bottom = 'bottom'
}
export const INVERT_BUMP: {[focus: string]: IFocus} = {
	right: 'bumpLeft',
	bumpRight: 'left',
	left: 'bumpRight',
	bumpLeft: 'right'
};
export const INVERT_TOP_BOTTOM = {
	top: 'bottom',
	bottom: 'top'
};
