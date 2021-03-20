import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
	selector: 'template-admin-settings',
	templateUrl: './settings.html',
	styleUrls: ['./settings.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminSettingsTemplate implements OnInit {
	page = {
		title: 'Settings'
	}
	constructor() {}
	ngOnInit() {}
}