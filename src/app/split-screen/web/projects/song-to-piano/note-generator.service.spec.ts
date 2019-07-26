import { TestBed } from '@angular/core/testing';

import { NoteGeneratorService } from './note-generator.service';

describe('NoteGeneratorService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: NoteGeneratorService = TestBed.get(NoteGeneratorService);
		expect(service).toBeTruthy();
	});
});
