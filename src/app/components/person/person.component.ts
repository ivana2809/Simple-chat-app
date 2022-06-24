import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MessagingService} from '../../services/messaging.service';
import {Message} from '../../interfaces/message';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: string;
  public text = new FormControl('');

  constructor(
    private messagingService: MessagingService
  ) { }

  ngOnInit(): void {}

  sendMessage(): void {
    if (this.person && this.text.value.length > 0) {
      const message: Message = {person: this.person, text: this.text.value};
      this.messagingService.sendMessage(message);
      this.text.reset();
    }

  }

}
