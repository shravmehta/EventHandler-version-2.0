import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient, private userService: UserService) {
  }

  getConnections(){
    return this.http.get('http://localhost:4000/connection/all');
  }

  getConnection(connectionId: string){
    return this.http.get('http://localhost:4000/connection/' + connectionId);
  }

  userAuth(userData: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:4000/user/login/', { Username: userData.Username, Password: userData.Password } , {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  addConnection(connectionData: any, UserID: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:4000/connection/addevent', { Category: connectionData.category,
      Name: connectionData.name, Topic: connectionData.topic, Details: connectionData.details, Location: connectionData.where,
      DateTime: connectionData.when, CreatedBy: UserID} , {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteRSVP(ConnectionId: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:4000/user/connection/delete', { ConId : ConnectionId,
      UserID: JSON.parse(this.userService.getUserDetails()[0])._UserID } , {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  addRSVP(ConnectionId: string, Going: string) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:4000/user/savedconnections', { ConId : ConnectionId, RSVP: Going,
      UserID: JSON.parse(this.userService.getUserDetails()[0])._UserID } , {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  createUser(user: User) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      return this.http.post('http://localhost:4000/user/register',  user, {
        headers: { 'Content-Type': 'application/json' },
      });
    }

  setSeat(Section, userConnectionID) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:4000/user/setSeat',  {Seat: Section, UserConnectionId: userConnectionID}, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

interface User {
  UserID: string;
  Password: string;
  Email: string;
  FirstName: string;
  LastName: string;
}
