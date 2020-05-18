import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated= new EventEmitter<{serverName:string,serverContent:string}>();

 // @ViewChild('ServerNameInput') ServerNameInput : ElementRef
  newServerName = 'DMRC';
 
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }


  onAddServer() {

    // onAddServer(ServerNameInput) {
    // console.log(ServerNameInput.value);
    //  console.log(this.ServerNameInput);
    //  console.log(this.ServerNameInput.nativeElement.value);
this.serverCreated.emit({serverName: this.newServerName ,serverContent: this.newServerContent});

    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({serverName: this.newServerName ,serverContent: this.newServerContent});

    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }   


}
