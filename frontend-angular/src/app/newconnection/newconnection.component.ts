import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../services/data.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newconnection',
  templateUrl: './newconnection.component.html',
  styleUrls: ['./newconnection.component.css']
})
export class NewconnectionComponent implements OnInit {
  allowedCategories: string[];

  NewConnectionForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    topic: new FormControl(''),
    details: new FormControl(''),
    where: new FormControl(''),
    when: new FormControl(''),
  });


  constructor(private dataService: DataService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
     this.allowedCategories = ['Rock Concerts', 'Ted Talk', 'Street Dance', 'Cinema'];
  }

  onSubmit() {
    const userId = JSON.parse(this.userService.getUserDetails()[0])._UserID;
    console.log(userId);
    this.dataService.addConnection(this.NewConnectionForm.value, userId).subscribe((data: any)  => {
      if (Object.keys(data).length > 0 ){
        this.userService.storeOnLocalStorage([this.userService.getUserDetails()[0], 'true', JSON.stringify(data.Profile)]);
        this.router.navigate(['/savedconnections']);
      }
    });
  }

}
