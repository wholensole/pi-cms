import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/app.constants';

@Component({
	selector: 'template-blog',
	templateUrl: './blog.html',
	styleUrls: ['./blog.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PageBlogTemplate implements OnInit {
	Arr = Array;
	contactForm: FormGroup
	page: any
	pageSize= 10
	pageNumber= 1
	pagesCount: Number = 1
	routePath: String
	posts: any = []
	users: any = []
	imageBase: any
	constructor(
		private formBuilder: FormBuilder,
		private dataService: DataService,
		private userService: UserService,
		public router: Router,
		private appConstant: AppConstants
	) {
		this.page = {
			title: 'Blog',
			postType: 'page'
		}
		this.getPosts('post')
	}
	ngOnInit() {
		this.getUsers()
		this.imageBase = this.appConstant.imageBase
		this.contactForm = this.formBuilder.group({
			yourName: ['', Validators.required],
            emailAddress: ['', Validators.required],
			phone: ['', Validators.required],
            company: ['', Validators.required],
			region: ['', Validators.required],
            message: ['', Validators.required],
		})
  }
  convertDate(date) {
    date = String(date)
    let dd = date.substring(0, 2);
    let mm = date.substring(3, 5);
    let yyyy = date.substring(6, 10);
    return mm+'-'+dd+'-'+yyyy
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
}
