import {
		animate,
		keyframes,
		query,
		stagger,
		state,
		style,
		transition,
		trigger
} from '@angular/animations';

// slides the screen after (click) or (mouseenter)
// calc (% - nrem) to produce the gap between screens
export const ScreenMovementAnimation = [
		trigger('leftScreen', [
				state('none', style({
						width: 'calc(50% - 0.5rem)'
				})),
				/** when left is active */
				state('left', style({
						width: 'calc(95% - 1rem)'
				})),
				state('bumpLeft', style({
						width: '10%'
				})),
				/** when right is active */
				state('right', style({
						width: '5%'
				})),
				state('bumpRight', style({
						width: 'calc(90% - 1rem)'
				})),
				transition('* => *', animate('500ms 0s cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
		trigger('rightScreen', [
				state('none', style({
						width: 'calc(50% - 0.5rem)'
				})),
				/** when left is active */
				state('left', style({
						width: '5%'
				})),
				state('bumpLeft', style({
						width: 'calc(90% - 1rem)'
				})),
				/** when right is active */
				state('right', style({
						width: 'calc(95% - 1rem)'
				})),
				state('bumpRight', style({
						width: '10%'
				})),
				transition('* => *', animate('500ms 0s cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
		trigger('topScreen', [
				state('none', style({
						height: 'calc(50% - 0.5rem)'
				})),
				/** when top is active */
				state('top', style({
						height: 'calc(92.5% - 1rem)'
				})),
				/** when bottom is active */
				state('bottom', style({
						height: '7.5%'
				})),
				transition('* => *', animate('500ms 0s cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
		trigger('bottomScreen', [
				state('none', style({
						height: 'calc(50% - 0.5rem)'
				})),
				/** when top is active */
				state('top', style({
						height: '7.5%'
				})),
				/** when bottom is active */
				state('bottom', style({
						height: 'calc(92.5% - 1rem)'
				})),
				transition('* => *', animate('500ms 0s cubic-bezier(0.4, 0.0, 0.2, 1)')),
		])
];
