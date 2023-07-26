import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ChatDetailsService } from 'src/app/services/chat-details.service';
import { ChatDetails } from 'src/app/models/chat-details';
import { User } from 'src/app/models/user';
import { ParticipantsService } from 'src/app/services/participants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private chatDetailsService: ChatDetailsService,
     private participantsService: ParticipantsService,
     private route :ActivatedRoute) { }


  chatDetails$ = new Observable<ChatDetails>();
  participants$ = new Observable<User[]>();

  ngOnInit(): void {
    var chatId = this.route.snapshot.paramMap.get('chatId');
    this.participants$ =this.participantsService.get(chatId);
    this.chatDetails$ = this.chatDetailsService.get(chatId);
  }
}
