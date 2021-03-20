import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DataService } from 'src/app/services/data.service'
import { Router } from '@angular/router';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Component({
	selector: 'widget-admin-media',
	templateUrl: './media.html',
	styleUrls: ['./media.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminMediaWidget implements OnInit {
	selectedImages: any
	page = {
		title: 'Media: Images'
	}
	imageBase = 'https://www.pi-cms.com/pi-cms/api/'
	mediaForm: FormGroup
	addMedia : boolean = false
	mediaFiles: any[] = []
	urls : any[] = []
	constructor(@Inject(LOCAL_STORAGE) private localStorage: any, 
		private formBuilder: FormBuilder,
		private productSerice: DataService,
		private router: Router
	) {
		if (localStorage.getItem('imagesData') == '' || localStorage.getItem('imagesData') == null) {
			this.selectedImages = []
		} else {
			this.selectedImages = localStorage.getItem('imagesData').split(',')
		}
		console.log(this.selectedImages)
	}
	onSelectFile(event) {
		let data
		if (event.target.files && event.target.files[0]) {
			let files = event.target.files
			let filesAmount = files.length
			for (let i = 0; i < filesAmount; i++) {
				var reader = new FileReader()
				reader.onload = (event:any) => {
					data = {
						"type":"",
						"url":event.target.result,
						"name":files[i].name
					}
					this.urls.push(data)
				}
				reader.readAsDataURL(event.target.files[i])
			}
		}
		this.mediaForm.controls['files'].setValue(this.urls)
	}
	ngOnInit() {
		this.getMedia()
		this.mediaForm = this.formBuilder.group({
			files: ['']
		})
	}
	delete(id) {
		this.productSerice.deleteMedia({'id':id})
		.subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {

						this.getMedia()
					} else {

					}
				}else {

				}
			},
			error => {

			}
		)
	}
	uploadMedia() {
		if (this.mediaForm.valid) {
			this.productSerice.addMedia(this.mediaForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
							this.mediaForm.reset()

							this.urls = []
							this.getMedia()
						} else {

						}
					}else {

					}
				},
				error => {

				}
			)
		}
	}
	getMedia() {
		this.productSerice.getMedia('image')
		.subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.mediaFiles = data.data
					} else {

					}
				}else {

				}
			},
			error => {

			}
		)
	}
	toggleSelect(id) {
		if(this.selectedImages.indexOf(id)==-1) {
			this.selectedImages.push(id)
		} else {
			this.selectedImages = this.selectedImages.filter(e => e !== id);
		}
		this.localStorage.setItem('imagesData', this.selectedImages)
	}

}
