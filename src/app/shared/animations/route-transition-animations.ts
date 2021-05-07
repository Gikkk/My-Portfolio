import { transition, trigger, query, style, animate } from '@angular/animations';

// routing animation
export const routeTransitionAnimations =
  trigger('triggerAnimation', [
    transition('Home <=> About, About <=> Projects, Projects <=> Contact, Home <=> Contact, Home <=> Projects, About <=> Contact', [
      query(':enter',[
        style({opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', background:'#fff', height: '100vh', 'z-index' : 2})
      ],
      {optional: true}),
      query(':leave',[
          style({opacity: 1}),
          animate('0.3s', style({opacity: 0}))
      ],
      {optional: true}),
      query(':enter',[
          style({opacity: 0}),
          animate('0.3s', style({opacity: 1}))
      ],
      {optional: true})
    ])
  ]);
