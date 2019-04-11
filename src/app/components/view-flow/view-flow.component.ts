import { Component, OnInit } from '@angular/core';

// Animations
import { fade } from '../../services/animations/animation';

@Component({
  selector: 'ai-view-flow',
  templateUrl: './view-flow.component.html',
  styleUrls: ['./view-flow.component.scss'],
  animations: [fade]
})
export class ViewFlowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
