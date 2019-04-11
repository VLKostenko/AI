import { Component, OnInit } from '@angular/core';

// Animations
import { fade } from '../../services/animations/animation';
@Component({
  selector: 'ai-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fade]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
