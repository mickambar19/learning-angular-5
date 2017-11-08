import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server has created!";
  serverName = "TestServer";
  serverCreated = false;
  servers = ["Server", "Server 2"];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateNewServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created. Its name is " + this.serverName;
  }

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

