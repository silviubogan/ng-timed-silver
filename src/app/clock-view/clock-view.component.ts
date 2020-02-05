import { Component, OnInit, Input } from '@angular/core';

import { Clock } from "../clock";

import { ClocksFlowViewComponent } from "../clocks-flow-view/clocks-flow-view.component";

@Component({
  selector: 'app-clock-view',
  templateUrl: './clock-view.component.html',
  styleUrls: ['./clock-view.component.scss']
})
export class ClockViewComponent implements OnInit {

  @Input() clock: Clock;

  constructor(
    private flowView: ClocksFlowViewComponent
  ) { }

  ngOnInit() {
    
  }

  onClicked(c : Clock)
  {
    for (let c2 of this.flowView.clocks)
    {
      c2.selected = false;
    }

    c.selected = true;
  }
}
