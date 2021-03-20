import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
declare var $: any
@Component({
	selector: 'template-contact-form',
	templateUrl: './contact-form.html',
	styleUrls: ['./contact-form.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PageContactTemplate implements OnInit {
	contactForm: FormGroup
	page: any
	countryList: any;
	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		public router: Router,
		public appConstant: AppConstants
	) {
		this.page = {
			title: 'Get In Touch',
			subTitle: 'We welcome your questions, comments or suggestions by phone, email, or via the form below.',
			postType: 'page'
		}
		this.countryList = appConstant.getCountryList();
	}
	ngOnInit() {
		this.contactForm = this.formBuilder.group({
			name: ['', Validators.required],
            emailAddress: ['', Validators.required],
			phone: ['', Validators.required],
            company: ['', Validators.required],
			region: ['', Validators.required],
            message: ['', Validators.required],
		})
	}
	contact() {
		if (this.contactForm.valid) {
			this.userService.login(this.contactForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
              $.fn.iaoAlert({msg: "Request submitted successfully.", type: "success", mode: "dark" })
							this.contactForm.reset()
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
