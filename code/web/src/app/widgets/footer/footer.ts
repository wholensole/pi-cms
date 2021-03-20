import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { AppConstants } from 'src/app/app.constants'

@Component({
	selector: 'widget-footer',
	templateUrl: './footer.html',
	styleUrls: ['./footer.scss'],
	encapsulation: ViewEncapsulation.None
})

export class FooterWidget implements OnInit {
	site: any
	currentYear: any
	constructor(
		private appConstants: AppConstants
	) {}
	ngOnInit() {
		let d = new Date
		this.site = this.appConstants.site
		this.currentYear = d.getFullYear()
	}
}