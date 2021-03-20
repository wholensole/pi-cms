import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
	selector: 'template-admin-seo',
	templateUrl: './seo.html',
	styleUrls: ['./seo.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminSeoTemplate implements OnInit {
	page = {
		title: 'SEO'
	}
	constructor() {}
	ngOnInit() {}
}