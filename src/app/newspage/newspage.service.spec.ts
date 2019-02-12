import { TestBed } from '@angular/core/testing';

import { NewspageService } from './newspage.service';

describe('NewspageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewspageService = TestBed.get(NewspageService);
    expect(service).toBeTruthy();
  });
});
