import { TestBed } from '@angular/core/testing';

import { FetchAllUsersService } from './fetch-all-users.service';

describe('FetchAllUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchAllUsersService = TestBed.get(FetchAllUsersService);
    expect(service).toBeTruthy();
  });
});
