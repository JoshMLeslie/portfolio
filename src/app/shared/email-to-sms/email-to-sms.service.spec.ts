import { TestBed } from '@angular/core/testing';

import { EmailToSmsService } from './email-to-sms.service';

describe('EmailToSmsService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: EmailToSmsService = TestBed.get(EmailToSmsService);
		expect(service).toBeTruthy();
	});
});
