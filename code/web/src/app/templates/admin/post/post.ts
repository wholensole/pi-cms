import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Select2OptionData } from 'ng-select2'
import { Options } from 'select2'
import { AppConstants } from 'src/app/app.constants'
import { DataService } from 'src/app/services/data.service'
declare var $: any;
import { UserService } from 'src/app/services/user.service';
import { LOCAL_STORAGE } from '@ng-toolkit/universal'

@Component({
	selector: 'template-admin-post',
	templateUrl: './post.html',
	styleUrls: ['./post.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminPostTemplate implements OnInit {
  tinymceApiKey: String = this.appConstants.tinymceApiKey
	activePopup: String = 'media'
	activeSlug: String = ''
	showMediaModal: Boolean = false
	categoriesData = []
	tagsData = []
  authorData: any = []
  robotsData: any = []
  keywordsData: any = []
	postType: any
	postTypesMap: any
	statusData: any
	layoutData: any
	editorValue: String = '<p>Enter Post content here</p>'
  editorOptions: any
  keywordOptions: any
  robotsOptions: any
	postAction: String = 'save'
	imageBase: String
	id : any
	postForm: FormGroup
	action: any
	urls = []
	pdfurls = []
	videourls = []
	renderSlug: Boolean = false
	page = {
		title: 'Add New Post',
		postType: 'post'
	}
	public exampleData: Array<Select2OptionData>
	public categoryOptions: Options
	public tagOptions: Options
	public statusOptions: Options
	public authorOptions: Options
	public layoutOptions: Options
	public value: string[]
	constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder,
		private appConstants: AppConstants,
		private dataService: DataService,
		private userService: UserService
	) {
		route.params.subscribe(val => {
			this.getUsers()
			this.renderSlug = true
			this.imageBase = this.appConstants.imageBase
			this.postTypesMap = this.appConstants.postTypesMap
			this.editorOptions = this.appConstants.editorOptions
			this.postType = this.route.snapshot.paramMap.get('postType')
			localStorage.setItem('attachmentType', this.postType)
			this.action = this.route.snapshot.paramMap.get('action')
			if (this.action == 'edit') {
				this.id = this.route.snapshot.paramMap.get('id')
				this.getPost(this.id)
			}
			this.postTypesMap.forEach(elem => {
				if (this.postType == elem.url) {
					this.page = {
						postType: elem.url,
						title: ((this.action == 'add')?'Add New ':'Edit ')+elem.title
					}
				}
			})
			this.statusData = [
				'draft',
				'private',
				'publish',
				'pending'
			]
			this.layoutData = [
				'boxed',
				'full',
				'solutions'
			]
			this.authorData = []
      this.robotsData = [
        'index, follow',
        'index, nofollow',
        'noindex, nofollow',
        'noindex, follow'
      ]
			this.postForm = this.formBuilder.group({
				title: ['', Validators.required],
				content: ['', Validators.required],
				stylesheet: ['', Validators.required],
				script: ['', Validators.required],
				type: [this.postType, Validators.required],
				author_id: ['1', Validators.required],
				categories: ['', Validators.required],
				tags: ['', Validators.required],
				action: [this.postAction, Validators.required],
				status: ['publish', Validators.required],
				slug: ['', Validators.required],
				images: ['', Validators.required],
				pdf: ['', Validators.required],
				video: ['', Validators.required],
				layout: ['boxed', Validators.required],
				excerpt: ['', Validators.required],
				keywords: '',
				canonical: [''],
				robots: ['index-follow', Validators.required],
				description: [''],
				postDate: [appConstants.getTodaysDate(), Validators.required]
			})
			if (this.postType == 'solutions') {
				this.postForm.get("layout").setValue('solutions')
			}
			this.categoryOptions = {
				width: '240',
				multiple: true,
				tags: true
			}
			this.tagOptions = {
				width: '240',
				multiple: true,
				tags: true
			}
			this.keywordOptions = {
				width: '240',
				multiple: true,
				tags: true
			}
			this.statusOptions = {
				width: '240',
				multiple: false,
				tags: false
			}
			this.layoutOptions = {
				width: '240',
				multiple: false,
				tags: false
			}
			this.authorOptions = {
				width: '240',
				multiple: false,
				tags: false
			}
			this.robotsOptions = {
				width: '240',
				multiple: false,
				tags: false
			}
		});
	}
	ngOnInit() {

	}
	delete(u, type) {
		switch (type) {
			case 'media':
				this.urls = this.urls.filter(e => e !== u);
				this.postForm.get('images').setValue(this.urls)
				break;
			case 'vide':
				this.videourls = this.videourls.filter(e => e !== u);
				this.postForm.get('video').setValue(this.videourls)
				break;
			case 'pdf':
				this.pdfurls = this.pdfurls.filter(e => e !== u);
				this.postForm.get('pdf').setValue(this.pdfurls)
				break;
		}
	}
	slugify() {
		if (this.renderSlug) {
			let title = this.postForm.value.title
			const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
			const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
			const p = new RegExp(a.split('').join('|'), 'g')
			let slug  = title.toString().toLowerCase()
			  .replace(/\s+/g, '-') // Replace spaces with -
			  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
			  .replace(/&/g, '-and-') // Replace & with 'and'
			  .replace(/[^\w\-]+/g, '') // Remove all non-word characters
			  .replace(/\-\-+/g, '-') // Replace multiple - with single -
			  .replace(/^-+/, '') // Trim - from start of text
			  .replace(/-+$/, '') // Trim - from end of text
			this.postForm.get('slug').setValue(slug)
		}
	}
	getUsers() {
    let authorData = []
    let entry = {}
		this.userService.getUsers()
		.subscribe(
			(data: any) => {
				if(data) {
          // console.log(data.data)
					if (data.success==1) {
						data.data.forEach(elem => {
              entry = {
                id: elem.id,
                text: elem.f_name+' '+elem.m_name+' '+elem.l_name
              }
              authorData.push(entry)
						});
            this.authorData = authorData
            console.log(this.authorData)
					} else {
						this.authorData = []
					}
				}else {

				}
			},
			error => {

			}
		)
	}
	getPost(id) {
		let data = {id: id}
		this.dataService.getPost(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						let u = data.data[0]
						this.categoriesData = u.categories.split(', ')
						this.tagsData = u.tags.split(', ')
						this.postForm.get("title").setValue(u.title)
						this.postForm.get("content").setValue(u.content)
						this.postForm.get("excerpt").setValue(u.excerpt)
						this.postForm.get("stylesheet").setValue(u.stylesheet)
						this.postForm.get("script").setValue(u.script)
						this.postForm.get("categories").setValue(u.categories.split(', '))
						this.postForm.get("tags").setValue(u.tags.split(', '))
						this.postForm.get("keywords").setValue(u.keywords)
						this.postForm.get("author_id").setValue(u.author_id)
						this.postForm.get("status").setValue(u.status)
						this.postForm.get("layout").setValue(u.layout)
						this.postForm.get("type").setValue(u.type)
						this.postForm.get("slug").setValue(u.slug)
						this.postForm.get("canonical").setValue((u.canonical!='')?u.canonical:'https://pi-cms.com/'+u.slug)
						this.postForm.get("description").setValue(u.description)
						this.postForm.get("robots").setValue(u.robots)
						this.postForm.get("postDate").setValue(u.post_date)
						if (u.images != '') {
							this.postForm.get("images").setValue(u.images)
							this.urls = u.images.split(',')
						}
						if (u.video != '') {
							this.postForm.get("video").setValue(u.video)
							this.videourls = u.video.split(',')
						}
						if (u.pdf != '') {
							this.postForm.get("pdf").setValue(u.pdf)
							this.pdfurls = u.pdf.split(',')
						}
						this.activeSlug = u.slug
					} else {
						this.router.navigate(['/admin/posts/'+this.postType])
					}
				}else {

				}
			},
			error => {

			}
		)
	}
	savePost() {
		let data
		if(this.id != null) {
			data = Object.assign(this.postForm.value, {'isEdit':1, 'id': this.id})
		} else {
			data = this.postForm.value
		}
		this.dataService.savePost(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.localStorage.removeItem('imagesData')
						this.localStorage.removeItem('pdfsData')
						this.localStorage.removeItem('videosData')
            this.router.navigate(['/admin/posts/'+this.postType])
            $.fn.iaoAlert({msg: data.msg, type: "success", mode: "dark" })
					} else {
            $.fn.iaoAlert({msg: "Error! error in post details.", type: "error", mode: "dark" })
					}
				}else {
          $.fn.iaoAlert({msg: "'Error! There is a server error, please contact admin.'", type: "warning", mode: "dark" })
				}
			},
			error => {
        $.fn.iaoAlert({msg: error.error, type: "error", mode: "dark" })
			}
		)
	}
	setImageValue() {
		let urlList = ''
		switch (this.activePopup) {
			case 'media':
				urlList = this.localStorage.getItem('imagesData')
				this.postForm.get("images").setValue(this.localStorage.getItem('imagesData'))
				this.urls = (urlList!=null && urlList != '')?urlList.split(','):[]
				break;
			case 'pdf':
				urlList = this.localStorage.getItem('pdfsData')
				this.postForm.get("pdf").setValue(this.localStorage.getItem('pdfsData'))
				this.pdfurls = (urlList!=null && urlList != '')?urlList.split(','):[]
				break;
			case 'video':
				urlList = this.localStorage.getItem('videosData')
				this.postForm.get("video").setValue(this.localStorage.getItem('videosData'))
				this.videourls = (urlList!=null && urlList != '')?urlList.split(','):[]
				break;
		}
	}
	getImageValue() {
		switch (this.activePopup) {
			case 'media':
				this.localStorage.setItem('imagesData', this.postForm.value.images)
				break;
			case 'pdf':
				this.localStorage.setItem('pdfsData', this.postForm.value.pdf)
				break;
			case 'video':
				this.localStorage.setItem('videosData', this.postForm.value.video)
				break;
		}
	}
}
