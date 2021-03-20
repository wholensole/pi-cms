import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DataService } from 'src/app/services/data.service'
import { AppConstants } from 'src/app/app.constants'
declare var $: any

@Component({
	selector: 'template-admin-media',
	templateUrl: './media.html',
	styleUrls: ['./media.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminMediaTemplate implements OnInit {
	page = {
		title: 'Media'
	}
	imageBase: String
	mediaForm: FormGroup
	addMedia : boolean = false
	mediaFiles: any[] = []
	urls : any[] = []
	onSelectFile(event) {
		let data
		if (event.target.files && event.target.files[0]) {
			let files = event.target.files
			let filesAmount = files.length
			for (let i = 0; i < filesAmount; i++) {
				let reader = new FileReader()
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
	constructor(
		private formBuilder: FormBuilder,
		private productSerice: DataService,
		private appConstants: AppConstants
	) {
	}
	ngOnInit() {
		this.imageBase = this.appConstants.imageBase
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
              $.fn.iaoAlert({msg: "Media file deleted successfully.", type: "success", mode: "dark" })
						this.getMedia()
					} else {
            $.fn.iaoAlert({msg: "Error in deleteing media file.", type: "error", mode: "dark" })
					}
				}else {
          $.fn.iaoAlert({msg: "Error! There is a server error, please contact admin.", type: "warning", mode: "dark" })
				}
			},
			error => {
        $.fn.iaoAlert({msg: error.error, type: "error", mode: "dark" })
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
              $.fn.iaoAlert({msg: "Media file uploaded successfully.", type: "success", mode: "dark" })
							this.urls = []
							this.getMedia()
						} else {
              $.fn.iaoAlert({msg: "Error in uploading media file.", type: "error", mode: "dark" })
						}
					}else {
            $.fn.iaoAlert({msg: "Error in uploading media file.", type: "error", mode: "dark" })
					}
				},
				error => {
          $.fn.iaoAlert({msg: "Error in uploading media file.", type: "error", mode: "dark" })
				}
			)
		}
	}
	getMedia() {
		this.productSerice.getMedia()
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
}
