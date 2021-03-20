import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
declare var $: any

@Component({
	selector: 'template-training-request',
	templateUrl: './training-request.html',
	styleUrls: ['./training-request.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PageTrainingRequestTemplate implements OnInit {
	trainingRequestForm: FormGroup
	page: any
	countryList: any;
	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		public router: Router,
		public appConstants: AppConstants
	) {
		this.page = {
			title: 'Request for Training',
			postType: 'page'
		}
		this.countryList = appConstants.getCountryList();
	}
	ngOnInit() {
		this.trainingRequestForm = this.formBuilder.group({
			name: ['', Validators.required],
      title: ['', Validators.required],
      company: ['', Validators.required],
			email: ['', Validators.required],
			phone: ['', Validators.required],
			country: ['', Validators.required],
			address1: ['', Validators.required],
			address2: [''],
			city: ['', Validators.required],
			state: ['', Validators.required],
			zipcode: ['', Validators.required],
			trainingRequested: ['', Validators.required],
			attendeeName1: ['', Validators.required],
			attendeeEmail1: ['', Validators.required],
			attendeeName2: [''],
			attendeeEmail2: [''],
			attendeeName3: [''],
			attendeeEmail3: [''],
			attendeeName4: [''],
			attendeeEmail4: [''],
			attendeeName5: [''],
			attendeeEmail5: [''],
			attendeeName6: [''],
			attendeeEmail6: [''],
			attendeeName7: [''],
			attendeeEmail7: [''],
			attendeeName8: [''],
			attendeeEmail8: [''],
			attendeeName9: [''],
			attendeeEmail9: [''],
			attendeeName10: [''],
			attendeeEmail10: [''],
			date1: [''],
			date2: [''],
			comment: [''],
		})
	}
	trainingRequest() {
		if (this.trainingRequestForm.valid) {
			this.userService.trainingRequest(this.trainingRequestForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
              $.fn.iaoAlert({msg: "Request submitted successfully.", type: "success", mode: "dark" })
							this.trainingRequestForm.reset()
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
