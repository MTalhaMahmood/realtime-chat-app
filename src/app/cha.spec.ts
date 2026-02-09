import { TestBed } from '@angular/core/testing';

import { Chat } from './chat';

describe('Cha', () => {
  let service: Chat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Chat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
