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
  _selections: {[tab: string]: number} = {'Home': 0,'Resume': 1,'About': 2};

  constructor(
    private router: Router
    , private route: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter(event => event instanceof ChildActivationEnd)
    ).subscribe((event: ChildActivationEnd) => {
        const title = event.snapshot.data.title;
        if (title) {
          this.selected = title;
        }
    });
  }

  ngOnInit() {
  }

  changeTab(event: MatTabChangeEvent) {
    this.selected = event.tab.textLabel;
    this.router.navigateByUrl(this.selected.toLowerCase());
  }

}
