import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { EmailToSmsService } from './email-to-sms.service';
import { tap } from 'rxjs/operators';

const CARRIER_VALUES = [
  { name: 'AT&T', address: (num: string) => `${num}@txt.att.net` }
  , { name: 'T-Mobile', address: (num: string) => `${num}@tmomail.net` }
  , { name: 'Verizon', address: (num: string) => `${num}@vtext.com` }
  , { name: 'Sprint', address: (num: string) => `${num}@messaging.sprintpcs.com` }
  , { name: 'XFinity Mobile', address: (num: string) => `${num}@vtext.com` }
  , { name: 'Virgin Mobile', address: (num: string) => `${num}@vmobl.com` }
  , { name: 'Tracfone', address: (num: string) => `${num}@mmst5.tracfone.com` }
  , { name: 'Metro PCS', address: (num: string) => `${num}@mymetropcs.com` }
  , { name: 'Boost Mobile', address: (num: string) => `${num}@sms.myboostmobile.com` }
  , { name: 'Cricket', address: (num: string) => `${num}@sms.cricketwireless.net` }
  , { name: 'Republic Wireless', address: (num: string) => `${num}@text.republicwireless.com` }
  , { name: 'Google Fi (Project Fi)', address: (num: string) => `${num}@msg.fi.google.com` }
  , { name: 'U.S.Cellular', address: (num: string) => `${num}@email.uscc.net` }
  , { name: 'Ting', address: (num: string) => `${num}@message.ting.com` }
  , { name: 'Consumer Cellular', address: (num: string) => `${num}@mailmymobile.net` }
  , { name: 'C-Spire', address: (num: string) => `${num}@cspire1.com` }
  , { name: 'Page Plus', address: (num: string) => `${num}@vtext.com` }
];

@Component({
  selector: 'app-email-to-sms',
  templateUrl: './email-to-sms.component.html',
  styleUrls: ['./email-to-sms.component.scss']
})
export class EmailToSmsComponent implements OnInit {
  carrierValues: {name: string, address: (num: string) => string}[];

  phoneNumber = new FormControl('', [Validators.pattern(/\d{10}/), Validators.required]);
  address = '';
  sent = false;
  refresh = false;
  loading = false;

  constructor(private service: EmailToSmsService) {
    this.carrierValues = CARRIER_VALUES;
  }

  ngOnInit() {}

  resetForm() {
    this.sent = false;
    this.refresh = false;
    this.loading = true;
  }

  sendLink() {
    this.resetForm();

    this.service.sendLink({destination_email: this.address}).pipe(
      tap(() => this.loading = false)
    ).subscribe(
      () => {
        this.sent = true;
        this.refresh = false;
      }
      , () => {
        this.sent = false;
        this.refresh = true;
      }
    );
  }

}
