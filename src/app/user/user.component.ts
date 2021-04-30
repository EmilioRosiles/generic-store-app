import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  currentUser!: any;

  constructor(private authService: AuthenticationService) {
    //doesn't work yet
    this.currentUser = authService.currentUserValue.username;
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
