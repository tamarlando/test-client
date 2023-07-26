import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatDetails } from 'src/app/models/chat-details';
import { Observable, of } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ChatDetailsService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  get(chatId: string): Observable<ChatDetails> {
    return of({
      id: "assf-fgmidoutirn",
      name: "test1",
      description: "test description",
      number: "aas-000-sn"
    });
    // return this.httpClient.get<ChatDetails>(`${this.baseUrl}/ChatDetails/${chatId}`);
  }
}
