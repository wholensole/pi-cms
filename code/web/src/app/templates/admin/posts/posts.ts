import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
declare var $: any

@Component({
	selector: 'template-admin-posts',
	templateUrl: './posts.html',
	styleUrls: ['./posts.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminPostsTemplate implements OnInit {
	Arr = Array;
	pageSize= 20
	pageNumber= 1
	postType: any;
	pagesCount: Number = 1
	routePath: String
	postTypesMap: any
	posts: any = []
	page = {
		title: 'Post',
		postType: 'post'
	}
	users: any
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private appConstants: AppConstants,
		private dataService: DataService,
		private userService: UserService
	) {
		route.params.subscribe(val => {
			this.getUsers()
			this.postTypesMap = appConstants.postTypesMap
			this.router.events.subscribe((ev) => {
				if (ev instanceof NavigationEnd) {
					this.setPageData()
				}
			});
			this.postType = this.route.snapshot.paramMap.get('postType');
			this.getPosts(this.postType)
			this.setPageData()
		});
	}
	ngOnInit() {
	}
	setPageData() {
		this.postTypesMap.forEach(elem => {
			if (this.postType == elem.url) {
				this.page = {
					postType: elem.url,
					title: elem.title
				}
			}
		});
	}

	trashPost(postId) {
    this.dataService.trashPost({id:postId}).subscribe(
      (data: any) => {
        if(data) {
          if (data.success==1) {
            $.fn.iaoAlert({msg: "Post deleted successfully.", type: "success", mode: "dark" })
            this.getPosts(this.postType)
          } else {
            $.fn.iaoAlert({msg: "There was an error in deleting the post.", type: "error", mode: "dark" })
          }
        }else {

        }
      },
      error => {

      }
    )
	}
	editPost(postId) {
		this.router.navigate(['/admin/post/'+this.postType+'/edit/'+postId])
	}
	getPosts(postType, pageSize = 20, pageNumber = 0) {
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
	getAuthor(id) {
		let authorName
		this.users.forEach(e => {
			if (e.id == id) {
				authorName = e.f_name+' '+e.l_name
			}
		});
		return authorName
	}
}
