import { Component, OnInit } from '@angular/core';

import { Clock, IClockContainerView, ClockContainerView } from "../clock";
import { ClockService } from "../clock.service";
import { ClockViewComponent } from '../clock-view/clock-view.component';

@Component({
  selector: 'app-clocks-data-grid',
  templateUrl: './clocks-data-grid.component.html',
  styleUrls: ['./clocks-data-grid.component.scss'],
  providers: [ { provide: ClockViewComponent.CONTAINER_TOKEN, useExisting: ClocksDataGridComponent } ]
})
export class ClocksDataGridComponent extends ClockContainerView implements OnInit, IClockContainerView {

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
