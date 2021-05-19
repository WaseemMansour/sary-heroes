import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate, state, query, animateChild } from '@angular/animations';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [
    trigger('shrinkFade', [
      transition(':leave', [
        animate('0.2s ease-in', style({ opacity: 0, transform: 'scale3d(0.85, 0.85, 0.85)' }))
      ]),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale3d(0.85, 0.85, 0.85)' }),
        animate('0.2s 0.1s ease-out')
      ]),
      state('true', style({ display: 'none' })),
      transition('false => true', [
        style({ opacity: 1, transform: 'scale3d(1.0, 1.0, 1.0)' }),
        animate('0.75s ease-in', style({ opacity: 0, transform: 'scale3d(0.0, 0.0, 0.0)' })),
      ])
    ])
  ]
})

export class HeroesComponent {
  showFilter = true;

  handleFilterToggle(isOpen: boolean) {
    this.showFilter = isOpen;
  }
}
