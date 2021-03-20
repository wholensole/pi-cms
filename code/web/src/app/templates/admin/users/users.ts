import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare var $: any

@Component({
	selector: 'template-admin-users',
	templateUrl: './users.html',
	styleUrls: ['./users.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminUsersTemplate implements OnInit {
	users: any
	routePath: String
	page = {
		title: 'All Users',
	}
	constructor(
		private router: Router,
		private userService: UserService
	) {
		this.router.events.subscribe((ev) => {
			if (ev instanceof NavigationEnd) {
			}
		  });
	}
	ngOnInit() {
		this.getUsers()
	}
	getUsers() {
		this.userService.getUsers()
		.subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.users = data.data
					} else {
						this.users = []
					}
				}else {

				}
			},
			error => {

			}
		)
	}
	editUser(userId) {
		this.router.navigate(['/admin/user/edit/'+userId])
	}
	updateUser(userId, status) {
		let userData
		this.users.forEach(user => {
			if (user.id == userId) {
				user.status = status
				userData = user
			}
		});
		this.userService.saveUser(userData)
		.subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
            $.fn.iaoAlert({msg: "User status successfully.", type: "success", mode: "dark" })
						this.users = data.data
					} else {
            $.fn.iaoAlert({msg: "Unable to update user status.", type: "error", mode: "dark" })
					}
				}else {
          $.fn.iaoAlert({msg: "Unable to update user status.", type: "error", mode: "dark" })
				}
			},
			error => {
        $.fn.iaoAlert({msg: "Unable to update user status.", type: "error", mode: "dark" })
			}
		)
	}
}
