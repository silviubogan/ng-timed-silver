import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { ClockService } from './clock.service';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  constructor(
    private clockService: ClockService
  ) { }

  async getFullJson() : Promise<string>
  {
    return JSON.stringify(await this.clockService.getClocks().toPromise(),
      null, "   ");
  }
}
