import { trigger, style, animate, transition } from '@angular/animations';

// simple fade in/out element
export const fadeInAnimation = trigger(
  'inOutAnimation', [
    transition(':enter', [
      style({ opacity: 0, width: 0}),
      animate('300ms', style({ opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate('300ms', style({ opacity: 0}))
    ])
  ]
)
