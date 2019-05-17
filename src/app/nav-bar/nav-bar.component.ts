import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ChildActivationEnd } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  selected: string = 'Home';

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof ChildActivationEnd)
      , take(1)
    ).subscribe((event: ChildActivationEnd) => this.selected = event.snapshot.data.title);
  }

  changeTab(event: MatTabChangeEvent) {
    this.selected = event.tab.textLabel;
    this.router.navigateByUrl(this.selected.toLowerCase());
  }

}
