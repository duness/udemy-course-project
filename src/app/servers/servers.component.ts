import { Component, OnInit } from '@angular/core';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  styles: [
    
  ]
})
export class ServersComponent implements OnInit {
  clickContainer = [];
  btnClicked = false;

  constructor() {
  }

  ngOnInit() {
  }

  onDisplayButtonClick() {
    this.clickContainer.push( this.clickContainer.length+1 );
    this.btnClicked = !this.btnClicked;
  }

}