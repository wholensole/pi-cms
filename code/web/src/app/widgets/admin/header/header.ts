import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/services/data.service'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
declare var $: any

@Component({
	selector: 'widget-admin-header',
	templateUrl: './header.html',
	styleUrls: ['./header.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminHeaderWidget implements OnInit {
	showSubAdminMenu: Boolean = false
	navLinks: any[]
	user: any
	constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
		private formBuilder: FormBuilder,
		private dataService: DataService,
		private userService: UserService,
		public router: Router
	) {
	}
	toggleNav() {
		let elem = document.getElementsByTagName('widget-admin-sidebar')[0]
		let className = elem.className
		if (className == 'open') {
			elem.className = ''
		} else {
			elem.className = 'open'
		}
	}
	ngOnInit() {
    $.getScript(
      "/assets/js/iao-alert.jquery.min.js"
    );
		this.user = JSON.parse(this.localStorage.getItem('userData'))
		this.navLinks = [
			{
				'url': '/home',
				'title': 'Home'
			},
			{
				'url': '/prices',
				'title': 'Prices'
			},
			{
				'url': '/contact-us',
				'title': 'Contact Us'
			},
			{
				'url': '/book-now',
				'title': 'Book Now'
			}
		]
	}
	logout() {
		this.userService.logout()
	}

}
