import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../services/data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  ConnectionId: string;
  ConnectionObject: any;

  ConnectionForm = new FormGroup({
  });

  constructor(private ARoute: ActivatedRoute, private dataService: DataService, private userService: UserService, private router: Router){ }

  ngOnInit(): void {
    this.ARoute.paramMap.subscribe(params => {
      this.ConnectionId = params['params']['id'];
      this.dataService.getConnection(this.ConnectionId).subscribe(data => {
        this.ConnectionObject = JSON.parse(JSON.stringify(data));
      });
    });
  }

  onSubmit(ConnectionId: string, Going: string) {
    if (this.userService.getUserDetails().length > 0) {
      this.dataService.addRSVP(ConnectionId, Going).subscribe((data: any) => {
        this.userService.storeOnLocalStorage([this.userService.getUserDetails()[0], 'true', JSON.stringify(data.Profile)]);
        this.router.navigate(['/savedconnections']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

}
