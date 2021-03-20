import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { DataService } from 'src/app/services/data.service'

@Component({
	selector: 'template-admin-dashboard',
	templateUrl: './dashboard.html',
	styleUrls: ['./dashboard.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminDashboardTemplate implements OnInit {
	page = {
		title: 'Dashboard'
	}
	userData: any
	postData: any
	constructor(
		private dataService: DataService
	) {}
	ngOnInit() {
		this.getData()
	}
	getData() {
		this.dataService.getDashboardData().subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.userData = data.data['userData']
						this.postData = data.data['postData']
					}
				}else {
					
				}
			},
			error => {
				
			}
		)
	}
}