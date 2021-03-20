import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Select2OptionData } from 'ng-select2'
import { Options } from 'select2'
import { AppConstants } from 'src/app/app.constants'
import { DataService } from 'src/app/services/data.service'
import { UserService } from 'src/app/services/user.service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
declare var $: any;

@Component({
	selector: 'template-post',
	templateUrl: './post.html',
	styleUrls: ['./post.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PostTemplate implements AfterViewInit {
  hasFixedImage: Boolean = false
  activeBannerImage: any
	countryList: any
	quoteForm: FormGroup
	showRequestForm: Boolean = false
	activeImage: any = ''
	postContent: any
	categoriesData = []
	tagsData = []
	postType: any
	postTypesMap: any
	imageBase: String
	statusData: any
	editorValue: String = '<p>Enter Post content here</p>'
	editorOptions: any
	postAction: String = 'save'
	slug : any
	posts: any
	users: any =[]
	page = {
		title: 'Post',
		postType: 'post'
  }
  preview= 0
	brands = [
		'5e0ea462a0e75.png',
		'5e0ea462a361f.png',
		'5e0ea462a5cb3.png',
		'5e0ea462aa949.png',
		'5e0ea462a82f9.png',
		'5e0ea462a051a.png'
	]
	urls: any = []
	pdfurls: any = []
	videourls: any = []
	public exampleData: Array<Select2OptionData>
	public categoryOptions: Options
	public tagOptions: Options
	public statusOptions: Options
	public value: string[]
	constructor(
		private route: ActivatedRoute,
		private appConstants: AppConstants,
		private dataService: DataService,
		private userService: UserService,
		public router: Router,
		private formBuilder: FormBuilder
	) {
    this.preview = this.appConstants.getUrlVars(window.location.href)['preview']
		this.quoteForm = this.formBuilder.group({
      name: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
			region: ['', Validators.required],
			product: ['', Validators.required]
		})
		this.countryList = this.appConstants.getCountryList();
		route.params.subscribe(val => {
			this.getUsers()
			this.imageBase = this.appConstants.imageBase
			this.postTypesMap = this.appConstants.postTypesMap
      this.slug = this.route.snapshot.paramMap.get('slug');
      (this.preview == 1)?this.getPost(this.slug):this.renderPost(this.slug)
		});
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
	ngAfterViewInit() {

	}
	slideProducts() {
		$(document).ready(function(){
			$('.product-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				prevArrow:'<button class="slick-prev hi-chevron-left"></button>',
				nextArrow:'<button class="slick-next hi-chevron-right"></button>',
				responsive: [
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1
						}
					}
				]
			})
			$('.media-files ul').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: false,
				responsive: [
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2
						}
					}
				]
			})
		})
	}
	scrolltoDescription() {
		$('html, body').animate({
			scrollTop: $(".accordion.description").offset().top
		}, 2000);
	}
	requestAQuote() {
		if (this.quoteForm.valid) {
      this.showRequestForm=false;
			this.userService.requestAQuote(this.quoteForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
              $.fn.iaoAlert({msg: "Quote Request submitted successfully.", type: "success", mode: "dark" })
							this.quoteForm.reset()
						} else {
              $.fn.iaoAlert({msg: "Unable to submit quote request.", type: "error", mode: "dark" })
						}
					}else {
            $.fn.iaoAlert({msg: "Unable to submit quote request.", type: "error", mode: "dark" })
					}
				},
				error => {
          $.fn.iaoAlert({msg: "Unable to submit quote request.", type: "error", mode: "dark" })
				}
			)
		}
	}
	getPost(slug) {
		let data = {slug: slug}
		this.dataService.getPost(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.posts = data.data
						let counter = 0
						this.posts.forEach(p => {
							this.appConstants.addStyletoDoc(this.posts[counter].stylesheet)
							this.appConstants.addScriptoDoc(this.posts[counter].script)
							if (p.type == 'industry') {
								this.appConstants.addScriptoDoc('$(document).ready(function(){new WOW().init();})')
							} else if (p.type == 'solution') {
								this.slideProducts()
								this.quoteForm.get('product').setValue(p.title)
              }
              let fixedImagesPosts = [
                'solution',
                'team-member',
                'career'
              ]
              if (fixedImagesPosts.indexOf(p.type)!=-1) {
                this.hasFixedImage = true
              }
              this.activeBannerImage = (p.type=='solution')?'5de6a6f687118.png)':(p.type=='team-member')?'man-162951_1920.jpg':(p.type=='career')?'tie-690084_1920.jpg':''
							if (p.images!='') {
								this.urls = p.images.split(',')
							}
							if (p.pdf!='') {
								this.pdfurls = p.pdf.split(',')
							}
							if (p.video!='') {
								this.videourls = p.video.split(',')
							}
							this.activeImage = this.urls[0]
							this.postContent = p.content
              this.appConstants.setPageTitle(p.title)
              this.appConstants.setPageCanonical(p.canonical)
              this.appConstants.setPageDescription(p.description)
              this.appConstants.setPageRobots(p.robots)
              this.appConstants.setPageKewords(p.keywords)
							counter++
						});
					} else {
						this.router.navigate(['error404']);
					}
				}else {

				}
			},
			error => {

			}
		)
	}
	renderPost(slug) {
		let data = {slug: slug}
		this.dataService.renderPost(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.posts = data.data
						let counter = 0
						this.posts.forEach(p => {
							this.appConstants.addStyletoDoc(this.posts[counter].stylesheet)
							this.appConstants.addScriptoDoc(this.posts[counter].script)
							if (p.type == 'industry') {
								this.appConstants.addScriptoDoc('$(document).ready(function(){new WOW().init();})')
							} else if (p.type == 'solution') {
								this.slideProducts()
								this.quoteForm.get('product').setValue(p.title)
							}
							if (p.images!='') {
								this.urls = p.images.split(',')
							}
							if (p.pdf!='') {
								this.pdfurls = p.pdf.split(',')
							}
							if (p.video!='') {
								this.videourls = p.video.split(',')
							}
							this.activeImage = this.urls[0]
							this.postContent = p.content
              this.appConstants.setPageTitle(p.title)
              this.appConstants.setPageCanonical(p.canonical)
              this.appConstants.setPageDescription(p.description)
              this.appConstants.setPageRobots(p.robots)
              this.appConstants.setPageKewords(p.keywords)
							counter++
						});
					} else {
						this.router.navigate(['error404']);
					}
				}else {

				}
			},
			error => {

			}
		)
	}
}
