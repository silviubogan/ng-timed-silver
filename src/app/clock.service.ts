import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Clock } from "./clock";
import { CLOCKS } from "./mock-clocks";

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }

  getClocks(): Observable<Clock[]>
  {
    return of(CLOCKS);
  }
}
