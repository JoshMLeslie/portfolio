export type ISide = 'web' | 'industrial';
export type IFocus = 'none' | 'left' | 'right' | 'bumpLeft' | 'bumpRight' | 'top' | 'bottom' | 'bumpTop' | 'bumpBottom';
export const FocusMain = {
	left: true
	, right: true
	, top: true
	, bottom: true
};
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
