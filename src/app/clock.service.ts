import { Injectable } from '@angular/core';

import { Clock } from "./clock";

import { CLOCKS } from "./mock-clocks";

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }

  getClocks(): Clock[]
  {
    return CLOCKS;
  }
}
