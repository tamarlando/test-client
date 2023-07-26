import { TestBed } from '@angular/core/testing';

import { ChatDetailsService } from './chat-details.service';

describe('ChatDetailsService', () => {
  let service: ChatDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
