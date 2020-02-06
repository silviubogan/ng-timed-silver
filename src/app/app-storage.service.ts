import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  constructor() { }

  getFullJson() : string
  {
    return JSON.stringify({
      test: "abc"
    }, null, "   ");
  }
}
