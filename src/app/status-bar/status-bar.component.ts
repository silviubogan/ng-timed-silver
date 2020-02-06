import { Component, OnInit } from '@angular/core';

import { AppStatusService } from '../app-status.service';
import { AppStorageService } from '../app-storage.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  
  constructor(
    public appStatusService: AppStatusService,
    private appStorageService: AppStorageService
  ) { }

  ngOnInit() {
  }

  showJson() : void
  {
    alert(this.appStorageService.getFullJson());
  }

}
