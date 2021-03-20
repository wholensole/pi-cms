import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
declare var $: any

@Component({
	selector: 'template-email-capture',
	templateUrl: './email-capture.html',
	styleUrls: ['./email-capture.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PageEmailCaptureTemplate implements OnInit {
	emailCaptureForm: FormGroup
	page: any
	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		public router: Router
	) {
		this.page = {
			title: 'Email Capture',
			postType: 'page'
		}
	}
	ngOnInit() {
		this.emailCaptureForm = this.formBuilder.group({
			email: ['', Validators.required],
		})
	}
	emailCapture() {
		if (this.emailCaptureForm.valid) {
			this.userService.emailCapture(this.emailCaptureForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
              $.fn.iaoAlert({msg: "Request submitted successfully.", type: "success", mode: "dark" })
							this.emailCaptureForm.reset()
						} else {
              $.fn.iaoAlert({msg: "Unable to submit request.", type: "error", mode: "dark" })
						}
					}else {
            $.fn.iaoAlert({msg: "Unable to submit request.", type: "error", mode: "dark" })
					}
				},
				error => {
          $.fn.iaoAlert({msg: "Unable to submit request.", type: "error", mode: "dark" })
				}
			)
		}
	}
}
