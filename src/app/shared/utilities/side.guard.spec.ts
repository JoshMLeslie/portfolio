import { TestBed, async, inject } from '@angular/core/testing';

import { SideResolver } from './side.resolver';

describe('SideGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideResolver]
    });
  });

  it('should ...', inject([SideResolver], (guard: SideResolver) => {
    expect(guard).toBeTruthy();
  }));
});
