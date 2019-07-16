import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryMenuComponent } from './rotary-menu.component';

describe('RotaryMenuComponent', () => {
	let component: RotaryMenuComponent;
	let fixture: ComponentFixture<RotaryMenuComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RotaryMenuComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RotaryMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
