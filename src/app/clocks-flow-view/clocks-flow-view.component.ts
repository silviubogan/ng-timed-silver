import { Component, OnInit } from '@angular/core';

import { Clock, IClockContainerView, ClockContainerView } from "../clock";
import { ClockService } from "../clock.service";
import { ClockViewComponent } from '../clock-view/clock-view.component';

@Component({
  selector: 'app-clocks-flow-view',
  templateUrl: './clocks-flow-view.component.html',
  styleUrls: ['./clocks-flow-view.component.scss'],
  providers: [ { provide: ClockViewComponent.CONTAINER_TOKEN, useExisting: ClocksFlowViewComponent } ]
})
export class ClocksFlowViewComponent extends ClockContainerView implements OnInit, IClockContainerView {

  static selectedClock : Clock | null;
  clocks : Clock[];

  constructor(
    private clockService: ClockService
  ) {
    super();
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
