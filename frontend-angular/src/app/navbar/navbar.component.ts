import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  User: any;
  // User: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getDetails().subscribe(someVariable => {
      if (this.userService.getUserDetails() && this.userService.getUserDetails().length > 0) {
        this.User = JSON.parse(this.userService.getUserDetails()[0]);
        this.isLoggedIn = (this.userService.getUserDetails()[1] === 'true');
      } else {
        this.isLoggedIn = false;
      }
    });
  }

}
