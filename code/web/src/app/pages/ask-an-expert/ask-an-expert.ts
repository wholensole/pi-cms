import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
declare var $: any

@Component({
	selector: 'template-ask-an-expert',
	templateUrl: './ask-an-expert.html',
	styleUrls: ['./ask-an-expert.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PageAskAnExpertTemplate implements OnInit {
	askExpertForm: FormGroup
	page: any
	constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
		private formBuilder: FormBuilder,
		private userService: UserService,
		public router: Router
	) {
		this.page = {
			title: 'Ask an Expert',
			postType: 'page'
		}
	}
	ngOnInit() {
		this.askExpertForm = this.formBuilder.group({
			name: ['', Validators.required],
      title: ['', Validators.required],
			company: ['', Validators.required],
      phone: ['', Validators.required],
			email: ['', Validators.required],
			businessType: ['', Validators.required],
			cell: [''],
			question: [''],
		})
	}
	contact() {
		if (this.askExpertForm.valid) {
			this.userService.login(this.askExpertForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
              $.fn.iaoAlert({msg: "Request submitted successfully.", type: "success", mode: "dark" })
							this.askExpertForm.reset()
							this.localStorage.setItem('userData', JSON.stringify(data.data))
							this.router.navigate(['admin']);
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
