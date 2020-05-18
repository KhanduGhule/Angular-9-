import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  serverElements = [{type:'server',name:'test server',content:'this is test content'}];
  // newServerName = '';
  // newServerContent = '';

  onServerCreated(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
     type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent
   });
  }

  onBluePrintCreated(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',     
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }



}
