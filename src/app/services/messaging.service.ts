import { Injectable } from '@angular/core';
import {Message} from '../interfaces/message';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private messagesSubject: BehaviorSubject<Message[]>;
  public messages$: Observable<Message[]>;

  constructor() {
    this.messagesSubject = new BehaviorSubject<Message[]>([]);
    this.messages$ = this.messagesSubject.asObservable();
  }

  sendMessage(message: Message): void {
    const tmpArray = this.messagesSubject.value;
    tmpArray.push(message);
    this.messagesSubject.next(tmpArray);
  }
}
