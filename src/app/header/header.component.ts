import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser!: any;
  ngOnInit(): void {
  }


  constructor() {
    this.currentUser = localStorage.getItem('currentUser');
  }
}
