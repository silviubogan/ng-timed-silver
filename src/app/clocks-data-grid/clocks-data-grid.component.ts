import { Component, OnInit } from '@angular/core';

import { Clock } from '../clock';
import { ClockService } from "../clock.service";

@Component({
  selector: 'app-clocks-data-grid',
  templateUrl: './clocks-data-grid.component.html',
  styleUrls: ['./clocks-data-grid.component.scss']
})
export class ClocksDataGridComponent implements OnInit {

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
