import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.scss']
})
export class WebHomeComponent implements OnInit {
  window: Window;
  constructor() { this.window = window }

  ngOnInit() {
  }

}
