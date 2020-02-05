import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Clock } from "./clock";
import { CLOCKS } from "./mock-clocks";
import { AppStatusService } from './app-status.service';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor(
    private appStatusService: AppStatusService
  ) { }

  getClocks(): Observable<Clock[]>
  {
    let x = of(CLOCKS);
    this.appStatusService.add(`Clocks fetched at ${new Date()}.`);
    return x;
  }
}
