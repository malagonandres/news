import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { query, stagger } from '@angular/animations';

export const BounceInUp = trigger('bounceInUp', [
    transition('void => *',
        animate('2000ms ease-out',
            keyframes([
                style({ opacity: 0, transform: 'translate3d(0, 3000px, 0)', offset: 0 }),
                style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: .6 }),
                style({ opacity: 1, transform: 'translate3d(0, 50px, 0)', offset: .7 }),
                style({ opacity: 1, transform: 'translate3d(0, -5px, 0)', offset: .9 }),
                style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ])
        )
    )
]);

export const CollapseDown = trigger('collapseDown', [
    state('void', style({
        height: '0'
    })),
    state('*', style({
        height: '100%'
    })),
    transition('void => *',
        animate('1000ms cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            keyframes([
                style({ opacity: 0, height: '0',   offset: 0 }),
                style({ opacity: 1, height: '100%', offset: .6 }),
                style({ opacity: 1, height: '90%', offset: .7 }),
                style({ opacity: 1, height: '100%', offset: 1 })
            ])
        )
    ),
    transition('* => void',
        animate('600ms cubic-bezier(0.215, 0.610, 0.355, 1.000)',
            keyframes([
                style({ opacity: 1, height: '100%', offset: 0 }),
                style({ opacity: 1, height: '0', offset: .6 }),
                style({ opacity: 1, height: '10%', offset: .8 }),
                style({ opacity: 0, height: '0',   offset: 1 })
            ])
        )
    )
]);

export const HeaderAnimation = trigger('headerAnimation', [
    state('void', style({
        transform: 'translate3d(0, -100px, 0)',
        opacity: 0
    })),
    state('create', style({
        transform: 'translate3d(0, -100px, 0)',
        opacity: 0
    })),
    state('show', style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
    })),
    state('remove', style({
        transform: 'translate3d(-1000px, 0, 0)',
        opacity: 0
    })),
    transition('create => show',
        animate('200ms ease-out')
    ),
    transition('* => *',
        animate('500ms ease-out')
    )

]);

export const BounceInRightGroup = trigger('bounceInRightGroup', [
    transition('* => *', [
        query(':enter', style({transform: 'translate3d(-100vw, 0, 0)'}), { optional: true }),
        query(':enter',
            stagger('200ms', [
                animate('1000ms cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                    keyframes([
                        style({ opacity: 0, transform: 'translate3d(-100vw, 0, 0)', offset: 0 }),
                        style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: .6 }),
                        style({ opacity: 1, transform: 'translate3d(-10px, 0, 0)', offset: .75 }),
                        style({ opacity: 1, transform: 'translate3d(5px, 0, 0)', offset: .9 }),
                        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
                    ])
                )
            ]),
            { optional: true })
    ])
]);

// get example https://daneden.github.io/animate.css/