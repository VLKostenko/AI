import { Component, OnInit } from '@angular/core';

// Animations
import { fade } from '../../services/animations/animation';

@Component({
  selector: 'ai-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [fade]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
