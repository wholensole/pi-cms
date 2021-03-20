import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { AppConstants } from 'src/app/app.constants'

@Component({
	selector: 'widget-admin-footer',
	templateUrl: './footer.html',
	styleUrls: ['./footer.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminFooterWidget implements OnInit {
	site: any
	cms: any
	constructor(
		private appConstants: AppConstants
	) {
		this.cms = this.appConstants.cms
		this.site = this.appConstants.site
	}
	ngOnInit() {}
}