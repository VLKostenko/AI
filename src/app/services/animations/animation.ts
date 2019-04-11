import { trigger, transition, state, animate, style } from '@angular/animations';

export let fade = trigger('fade', [

	state('void', style({  transform: 'translateX(0)', opacity: 0 })), // void <=> *

	transition(':enter, :leave', [
	animate(450)
	])
]);
