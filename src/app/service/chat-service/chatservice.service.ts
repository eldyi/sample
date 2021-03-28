import { Observable } from 'rxjs';
import { Component, OnInit, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class ChatserviceService {
  newMessage = '';
  messageList = [];
  constructor(private socket: Socket) {}
  public sendMessage(message) {
    console.log(message);
    this.socket.emit('new-message', message);
  }
  public getMessages = () => {
    return new Observable((observer) => {
      this.socket.on('message-received', (message) => {
        console.log(message);
        observer.next(message);
      });
    });
  };
}
