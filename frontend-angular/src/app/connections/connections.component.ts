import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  allConnections: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getConnections().subscribe(data => {
      this.allConnections = JSON.parse(JSON.stringify(data));
    });
  }

}
