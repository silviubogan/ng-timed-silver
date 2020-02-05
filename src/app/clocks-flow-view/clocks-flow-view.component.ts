import { Component, OnInit } from '@angular/core';

import { Clock } from '../clock';

import { ClockService } from "../clock.service";

@Component({
  selector: 'app-clocks-flow-view',
  templateUrl: './clocks-flow-view.component.html',
  styleUrls: ['./clocks-flow-view.component.scss']
})
export class ClocksFlowViewComponent implements OnInit {

  static selectedClock : Clock | null;
  clocks : Clock[];

  constructor(
    private clockService: ClockService
  ) {
  }

  ngOnInit() {
    this.getClocks();
  }

  getClocks(): void
  {
    this.clockService.getClocks()
      .subscribe(clocks => this.clocks = clocks);
  }
}
