import { Component, OnInit, Input } from '@angular/core';
import { SpeedDialFabAnimations } from './rotary-menu.animation';
import { Router } from '@angular/router';

const LoadDemo = (): IMenu[] => {
  return [
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/joshmleslie'
    }
    , {
     label: 'Github',
      icon: 'github',
      link: 'https://github.com/JoshMLeslie'
    }
    , {
      label: 'Home',
      icon: 'home',
      link: 'home',
      native: true
    }
    , {
      label: 'Resume',
      icon: 'insert_drive_file',
      link: 'resume',
      native: true
    }
    , {
      label: 'About',
      icon: 'help',
      link: 'about',
      native: true
    }
  ];
}


export interface IMenu {
  'label': string;
  'icon': string;
  'link': string;
  'class'?: string;
  'native'?: boolean;
}

@Component({
  selector: 'app-rotary-menu',
  templateUrl: './rotary-menu.component.html',
  styleUrls: ['./rotary-menu.component.scss'],
  animations: SpeedDialFabAnimations
})
export class RotaryMenuComponent implements OnInit {
  // based on this Angular 1.x work: https://codepen.io/kilchenmann/pen/dGGGJJ
  // and A-5.x: https://medium.com/@webdev_aaron/fab-speed-dial-with-angular-5-2-angular-material-be696fc14967

  isOpen: boolean = false;
  @Input() icons: IMenu[] = [];

  constructor(private router: Router) {
    this.icons = LoadDemo();
  }

  ngOnInit() {
  }

  show() {
    this.isOpen = true;
  }

  hide() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  goLink(link: string) {
    this.toggle();

    if (/www|http/.test(link)) {
      window.open(link, '_blank', 'noopener');
    } else {
      this.router.navigateByUrl(link);
    }
  }
}
