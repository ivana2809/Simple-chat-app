import { Injectable } from '@angular/core';
import {Message} from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private messages: Message[] = [];

  constructor() { }

  sendMessage(message: Message): void {
    this.messages.push(message);
    console.log(this.messages);
  }
}
