import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
@Input('serElement') element :{name:string,content:string,type:string}
  constructor() { }

  ngOnInit(): void {
  }

}
