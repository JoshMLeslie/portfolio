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

// spins the persistent button
export const SpeedDialFabAnimations = [
    trigger('fabToggler', [
        state('false', style({
            transform: 'rotate(0deg)'
        })),
        state('true', style({
            transform: 'translateX(-2rem) rotate(225deg)'
        })),
        transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
];
