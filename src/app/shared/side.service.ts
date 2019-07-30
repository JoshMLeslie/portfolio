import { Injectable } from '@angular/core';
import { ISide } from '../split-screen/split-screen';

@Injectable({
	providedIn: 'root'
})
export class SideService {
	public side: ISide;
}
