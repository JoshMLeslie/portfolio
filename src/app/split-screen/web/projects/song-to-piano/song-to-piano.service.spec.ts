import { TestBed } from '@angular/core/testing';

import { SongToPianoService } from './song-to-piano.service';

describe('SongToPianoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongToPianoService = TestBed.get(SongToPianoService);
    expect(service).toBeTruthy();
  });
});
