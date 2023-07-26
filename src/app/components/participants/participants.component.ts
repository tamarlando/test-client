import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ParticipantsService } from 'src/app/services/participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  constructor(
    private participantsService: ParticipantsService,
    private route: ActivatedRoute) { }


  participants$ = new Observable<User[]>();

  ngOnInit(): void {
    var chatId = this.route.snapshot.paramMap.get('chatId');
    this.participants$ = this.participantsService.get(chatId);
  }

}
