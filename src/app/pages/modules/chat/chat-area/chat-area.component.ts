import { Observable } from 'rxjs';
import { HttpsService } from './../../../../service/https.service';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatserviceService } from 'src/app/service/chat-service/chatservice.service';
import { IonContent } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss'],
})
export class ChatAreaComponent implements OnInit {
  newMessage: string;
  @ViewChild(IonContent) content: IonContent
  constructor(
    private socket: Socket,
    private http: HttpsService,
    private chatService: ChatserviceService
  ) {}
  messageList = [];
  ngOnInit(): void {
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

    this.content.scrollToBottom(200);
  }
}
