import { TestBed } from '@angular/core/testing';

import { AuthgaurdServiceService } from './authgaurd-service.service';

describe('AuthgaurdServiceService', () => {
  let service: AuthgaurdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthgaurdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
