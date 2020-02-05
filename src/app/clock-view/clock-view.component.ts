import { Component, OnInit, Input, InjectionToken, Inject } from '@angular/core';

import { Clock, IClockContainerView, ClockContainerView } from "../clock";

@Component({
  selector: 'app-clock-view',
  templateUrl: './clock-view.component.html',
  styleUrls: ['./clock-view.component.scss']
})
export class ClockViewComponent implements OnInit {

  @Input() clock: Clock;

  static CONTAINER_TOKEN = new InjectionToken<IClockContainerView>(typeof(ClockContainerView));

  constructor(
    @Inject(ClockViewComponent.CONTAINER_TOKEN) private parentCollectionView: ClockContainerView
  ) { }

  ngOnInit() {
    
  }

  onClicked(c: Clock)
  {
    for (let c2 of this.parentCollectionView.clocks)
    {
      c2.selected = false;
    }

    c.selected = true;
  }
}
