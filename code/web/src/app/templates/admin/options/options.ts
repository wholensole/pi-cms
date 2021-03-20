import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
	selector: 'template-admin-options',
	templateUrl: './options.html',
	styleUrls: ['./options.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminOptionsTemplate implements OnInit {
	page = {
		title: 'Options'
	}
	constructor() {}
	ngOnInit() {}
}