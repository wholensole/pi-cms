import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
declare var $: any

@Component({
	selector: 'template-newsletter-request',
	templateUrl: './newsletter-request.html',
	styleUrls: ['./newsletter-request.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PageNewsletterRequestTemplate implements OnInit {
	newsletterForm: FormGroup
	page: any
	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		public router: Router
	) {
		this.page = {
			title: 'Newletter Request',
			postType: 'page'
		}
	}
	ngOnInit() {
		this.newsletterForm = this.formBuilder.group({
			firstName: ['', Validators.required],
            lastName: ['', Validators.required],
			email: ['', Validators.required],
            company: ['', Validators.required],
		})
	}
	newsletterRequest() {
		if (this.newsletterForm.valid) {
			this.userService.newsletterRequest(this.newsletterForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
              $.fn.iaoAlert({msg: "Request submitted successfully.", type: "success", mode: "dark" })
							this.newsletterForm.reset()
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
