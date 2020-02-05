import { Component, OnInit } from '@angular/core';

import { Clock } from '../clock';

import { CLOCKS } from '../mock-clocks';

@Component({
  selector: 'app-clocks-flow-view',
  templateUrl: './clocks-flow-view.component.html',
  styleUrls: ['./clocks-flow-view.component.scss']
})
export class ClocksFlowViewComponent implements OnInit {

  clocks : Clock[] = [];

  constructor() {
    this.clocks.push(...CLOCKS);
  }

  ngOnInit() {
  }

}
