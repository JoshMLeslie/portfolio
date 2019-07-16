import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({ selector: '[copy-to-clipboard]' })
export class CopyToClipboardDirective {
	// https://stackoverflow.com/questions/49102724/angular-5-copy-to-clipboard

	@Input('copy-to-clipboard')
	public payload: string;

	@Output()
	public copied: EventEmitter<string> = new EventEmitter<string>();

	@HostListener('click', ['$event'])
	public onClick(event: MouseEvent): void {

		event.preventDefault();
		if (!this.payload) {
			return;
		}

		const listener = (e: ClipboardEvent) => {
			e.preventDefault();

			// tslint:disable-next-line: no-string-literal
			const clipboard = e.clipboardData || window['clipboardData']; // redundancy for unsupported browsers

			if (clipboard) {
				clipboard.setData('text', this.payload.toString());

				this.copied.emit(this.payload);
			}
		};

		document.addEventListener('copy', listener, false);
		document.execCommand('copy');
		document.removeEventListener('copy', listener, false);
	}
}
