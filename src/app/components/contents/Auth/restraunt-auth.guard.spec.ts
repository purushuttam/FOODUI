import { TestBed } from '@angular/core/testing';

import { RestrauntAuthGuard } from './restraunt-auth.guard';

describe('RestrauntAuthGuard', () => {
  let guard: RestrauntAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestrauntAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
