import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailToSmsComponent } from './email-to-sms.component';

describe('EmailToSmsComponent', () => {
  let component: EmailToSmsComponent;
  let fixture: ComponentFixture<EmailToSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailToSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailToSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
