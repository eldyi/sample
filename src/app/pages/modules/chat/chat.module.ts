import { ChatserviceService } from 'src/app/service/chat-service/chatservice.service';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, ChatRoutingModule, IonicModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ChatserviceService],
})
export class ChatModule {}
