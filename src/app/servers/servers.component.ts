import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServerCreation = false;
  serverCreationStatus = "Server not created!";

  constructor() { 
    setTimeout(()=>{
      this.allowServerCreation = true;
    },2000);
  }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreationStatus = "Server was created!";
  }

}
