import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../../services/messaging.service';
import {Message} from '../../interfaces/message';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  public messages: Message[];

  constructor(
    private messagingService: MessagingService
  ) { }

  ngOnInit(): void {
    this.messagingService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }

  clearHistory(): void {
    this.messagingService.clearHistory();
  }

}
