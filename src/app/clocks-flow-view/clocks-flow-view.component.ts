import { Component, OnInit } from '@angular/core';

import { Clock } from '../clock';

@Component({
  selector: 'app-clocks-flow-view',
  templateUrl: './clocks-flow-view.component.html',
  styleUrls: ['./clocks-flow-view.component.scss']
})
export class ClocksFlowViewComponent implements OnInit {

  clocks : Clock[] = [];

  constructor() {
    let c1 : Clock = new Clock();
    c1.id = 1;
    c1.tag = "My Timer";

    let c2 : Clock = new Clock();
    c2.id = 2;
    c2.tag = "My Stopwatch";

    this.clocks.push(c1, c2);
  }

  ngOnInit() {
  }

}
