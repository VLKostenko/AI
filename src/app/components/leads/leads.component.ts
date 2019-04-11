import { Component, OnInit  } from '@angular/core';

// Animations
import { fade } from '../../services/animations/animation';

interface Lead {
  name: string;
  area: string;
  added: number;
  visit: number;
  steps: string;
}

const LEADS: Lead[] = [
  {
    name: 'Kamil Harding',
    area: 'Vivore',
    added: 23,
    visit: 2009,
    steps: '4b'
  },
  {
    name: 'Marcos Hassan',
    added: 83,
    area: 'Scitude',
    visit: 2009,
    steps: '4a'
  },
  {
    name: 'Eisa Bishop',
    added: 53,
    area: 'Rhyist',
    visit: 2005,
    steps: '4d'
  },
  {
    name: 'Dan Mclaughlin',
    added: 57,
    area: 'Surill',
    visit: 2007,
    steps: '2d'
  }
];


@Component({
  selector: 'ai-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
  animations: [fade]
})
export class LeadsComponent implements OnInit {

  leads = LEADS;

  constructor() {}

  ngOnInit() {
  }

}
