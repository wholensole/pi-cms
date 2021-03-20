import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DataService } from 'src/app/services/data.service'
import { Router } from '@angular/router';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Component({
	selector: 'widget-admin-product-video',
	templateUrl: './product-video.html',
	styleUrls: ['./product-video.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminProductVideoWidget implements OnInit {
	selectedVideos: any
	page = {
		title: 'Media: Video'
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
		if (localStorage.getItem('videosData') == '' || localStorage.getItem('videosData') == null) {
			this.selectedVideos = []
		} else {
			this.selectedVideos = localStorage.getItem('videosData').split(',')
		}
		console.log(this.selectedVideos)
		console.log(this.urls)
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
						"type":"video",
						"url":event.target.result,
						"name":files[i].name
					}
					this.urls.push(data)
					console.log(this.urls)
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
			this.productSerice.addVideo(this.mediaForm.value)
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
		this.productSerice.getMedia('video')
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
		if(this.selectedVideos.indexOf(id)==-1) {
			this.selectedVideos.push(id)
		} else {
			this.selectedVideos = this.selectedVideos.filter(e => e !== id);
		}
		this.localStorage.setItem('videosData', this.selectedVideos)
	}
}
