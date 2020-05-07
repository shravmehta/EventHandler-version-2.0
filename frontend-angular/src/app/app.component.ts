import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {DataService} from './services/data.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.title = 'EventHandler';

    // Initializing all the required Cookies.
    if (this.userService.getUserDetails().length <= 0) {
      // this.userService.storeOnLocalStorage(['', 'false', '']);
    }
  }


}
