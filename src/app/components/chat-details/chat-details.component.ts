import { Component, Input } from '@angular/core';
import { ChatDetails } from 'src/app/models/chat-details';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss']
})
export class ChatDetailsComponent {

@Input() chatDetails :ChatDetails;

}
