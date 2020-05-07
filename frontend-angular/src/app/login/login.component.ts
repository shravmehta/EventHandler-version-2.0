import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {DataService} from '../services/data.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  loginForm = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

  constructor( private dataService: DataService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.getUserDetails().length > 0){
      this.router.navigate(['/savedconnections']);
    }
  }

  onSubmit() {
    this.dataService.userAuth(this.loginForm.value).subscribe((data: any)  => {
      if (Object.keys(data).length > 0 ){
        this.userService.storeOnLocalStorage([JSON.stringify(data.User), 'true', JSON.stringify(data.Profile)]);
        this.router.navigate(['/savedconnections']);
      }
    });
  }
}
