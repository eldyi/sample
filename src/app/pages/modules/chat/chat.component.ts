import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

import { ChatserviceService } from 'src/app/service/chat-service/chatservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(
    private socket: Socket,
    private chatService: ChatserviceService
  ) {}

  messageList = [];
  newMessage = '';
  ngOnInit() {
    this.chatService.getMessages().subscribe(
      (message: string) => {
        console.log(message);
        this.messageList.push(message);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  sendNewMsg() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
