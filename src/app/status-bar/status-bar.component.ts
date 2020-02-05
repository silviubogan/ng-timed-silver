import { Component, OnInit } from '@angular/core';

import { AppStatusService } from '../app-status.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  
  constructor(
    public appStatusService: AppStatusService
  ) { }

  ngOnInit() {
  }

}
