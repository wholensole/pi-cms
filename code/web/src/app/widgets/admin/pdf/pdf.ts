import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DataService } from 'src/app/services/data.service'
import { Router } from '@angular/router';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Component({
	selector: 'widget-admin-pdf',
	templateUrl: './pdf.html',
	styleUrls: ['./pdf.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminPdfWidget implements OnInit {
	selectedPdfs: any
	page = {
		title: 'Media: PDF'
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
		if (localStorage.getItem('pdfsData') == '' || localStorage.getItem('pdfsData') == null) {
			this.selectedPdfs = []
		} else {
			this.selectedPdfs = localStorage.getItem('pdfsData').split(',')
		}
	}
	onSelectFile(event) {
		let data
		let targetData = event.target
		if (targetData.files && targetData.files[0]) {
			var filesAmount = targetData.files.length
			for (let i = 0; i < filesAmount; i++) {
				var reader = new FileReader()
				reader.onload = (event:any) => {
					data = {
						"type":"pdf",
						"url":event.target.result,
						"name":targetData.files[i].name
					}
					this.urls.push(data)
				}
				reader.readAsDataURL(targetData.files[i])
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
			this.productSerice.addPdf(this.mediaForm.value)
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
		this.productSerice.getMedia('pdf')
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
		if(this.selectedPdfs.indexOf(id)==-1) {
			this.selectedPdfs.push(id)
		} else {
			this.selectedPdfs = this.selectedPdfs.filter(e => e !== id);
		}
		this.localStorage.setItem('pdfsData', this.selectedPdfs)
	}

}
