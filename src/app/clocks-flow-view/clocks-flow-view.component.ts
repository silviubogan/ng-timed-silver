import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clocks-flow-view',
  templateUrl: './clocks-flow-view.component.html',
  styleUrls: ['./clocks-flow-view.component.scss']
})
export class ClocksFlowViewComponent implements OnInit {

  clocks = [
    {
      tag: "Clock A"
    },
    {
      tag: "Clock B"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
