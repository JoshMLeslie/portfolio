import { TestBed } from '@angular/core/testing';

import { XRService } from './xr.service';

describe('XrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XRService = TestBed.get(XRService);
    expect(service).toBeTruthy();
  });
});
