import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ChildActivationEnd, } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';

type ITab = 'Home' | 'Resume' | 'About';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public tabs: ITab[] = ['Home' , 'Resume' , 'About'];

  public selected: ITab = 'Home';
  private _selectedIdx = new Subject<number>();
  public selectedIdx = this._selectedIdx.asObservable();

  constructor(private router: Router) {
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
    this.selected = event.tab.textLabel as ITab;
    this._selectedIdx.next(event.index);

    // // there's definitely a better way but none of them are working.
    const url = this.router.url.match(/\/\w+/)[0] + '/' + this.selected.toLowerCase();
    this.router.navigateByUrl(url);
  }

}
