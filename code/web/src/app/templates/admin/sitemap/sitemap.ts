import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { DataService } from 'src/app/services/data.service'
declare var $: any;

@Component({
	selector: 'template-admin-sitemap',
	templateUrl: './sitemap.html',
	styleUrls: ['./sitemap.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminSitemapTemplate implements OnInit {
	page = {
		title: 'Sitemap'
	}
	constructor(
		private dataService: DataService
	) {
	}
	ngOnInit() {
	}
	generateSitemap() {
		this.dataService.generateSitemap().subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
            $.fn.iaoAlert({msg: "Sitemap regenerated successfully.", type: "success", mode: "dark" })
					}
				}else {

				}
			},
			error => {

			}
		)
	}
}
