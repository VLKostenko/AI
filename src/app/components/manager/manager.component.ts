import { Component, OnInit } from '@angular/core';

// Animations
import { fade } from '../../services/animations/animation';
interface Admin {
  name: string;
  status: string;
  joined: number;
  login: number;
  upload: number;
  sales: number;
  pending: number;
}

const ADMIN: Admin[] = [

  {
    name: 'Evan Larson',
    status: 'Admin',
    joined: 12,
    login: 23,
    upload: 25,
    sales: 50,
    pending: 3000,
  },
  {
    name: 'Peter Wilson',
    status: 'Admin',
    joined: 2,
    login: 23,
    upload: 5,
    sales: 5,
    pending: 300,
  },
  {
    name: 'larry Larson',
    status: 'Admin',
    joined: 21,
    login: 23,
    upload: 25,
    sales: 50,
    pending: 5000,
  }

];

@Component({
  selector: 'ai-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  animations: [fade]
})
export class ManagerComponent implements OnInit {

  admin = ADMIN;

  constructor() { }

  ngOnInit() {
  }

}
