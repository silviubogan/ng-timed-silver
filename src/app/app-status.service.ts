import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStatusService {
  messages: string[] = [];
  lastMessage : string;

  add(message: string)
  {
    this.lastMessage = message;
    this.messages.push(message);
  }

  clear()
  {
    this.lastMessage = "";
    this.messages = [];
  }

  constructor() {
    this.add("Application started.");
  }
}
