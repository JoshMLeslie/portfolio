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
    trigger('rotaryMenuToggle', [
        state('false', style({
            transform: 'rotate(0deg)'
        })),
        state('true', style({
            transform: 'translateX(-2rem) rotate(225deg)'
        })),
        transition('false => true', animate('200ms 0s cubic-bezier(0.4, 0.0, 0.2, 1)')),
        transition('true => false', animate('200ms 300ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
];
