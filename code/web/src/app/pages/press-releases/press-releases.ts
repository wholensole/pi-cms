import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';

@Component({
	selector: 'template-press-releases',
	templateUrl: './press-releases.html',
	styleUrls: ['./press-releases.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PagePressReleasesTemplate implements OnInit {
	contactForm: FormGroup
	Arr = Array
	page: any
	pageSize= 10
	imageBase: any
	pageNumber = 1
	pagesCount: Number = 1
	posts: any = []
	users: any = []
	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		private dataService: DataService,
		public router: Router,
		private appConstants: AppConstants
	) {
		this.page = {
			title: 'Press Releases',
			subTitle: 'We are a collaborative visualization company',
			postType: 'page'
		}
		this.getPosts('press-release')
		this.imageBase = this.appConstants.imageBase
	}
	ngOnInit() {
		this.contactForm = this.formBuilder.group({
			yourName: ['', Validators.required],
            emailAddress: ['', Validators.required],
			phone: ['', Validators.required],
            company: ['', Validators.required],
			region: ['', Validators.required],
            message: ['', Validators.required],
		})
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
	getAuthor(id) {
		let authorName
		this.users.forEach(e => {
			if (e.id == id) {
				authorName = e.f_name+' '+e.l_name
			}
		});
		return authorName
	}
	getPosts(postType, pageSize = 10, pageNumber = 0) {
		if (pageNumber >= 0 && pageNumber < this.pagesCount && this.pageNumber != pageNumber) {
			this.pageNumber = pageNumber
			let data = {'postType': postType, 'pageNumber': pageNumber, 'pageSize': pageSize}
			this.dataService.getPosts(data).subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
							this.posts = data.data
							this.pagesCount = Math.ceil(data.total/this.pageSize)
						} else {
							this.posts = []
						}
					}else {
						
					}
				},
				error => {
					
				}
			)
		}
	}
}