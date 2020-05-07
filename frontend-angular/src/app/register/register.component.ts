import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;

  registerForm = new FormGroup({
    UserID: new FormControl(''),
    Password: new FormControl(''),
    Email: new FormControl(''),
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
  });

  constructor(private userService: UserService, private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.userService.getUserDetails().length > 0) {
      this.router.navigate(['/savedconnections']);
    }
  }

  onSubmit() {
    this.dataService.createUser(this.registerForm.value).subscribe((data: any) => {
      if (Object.keys(data).length > 0 ){
        this.userService.storeOnLocalStorage([JSON.stringify(data.User), 'true', JSON.stringify(data.Profile)]);
        this.router.navigate(['/savedconnections']);
      }
    });
  }

}
