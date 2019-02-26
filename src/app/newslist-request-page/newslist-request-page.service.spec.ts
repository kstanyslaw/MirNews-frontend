import { TestBed } from '@angular/core/testing';

import { NewslistRequestPageService } from './newslist-request-page.service';

describe('NewslistRequestPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewslistRequestPageService = TestBed.get(NewslistRequestPageService);
    expect(service).toBeTruthy();
  });
});
