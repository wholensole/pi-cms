import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
declare var $: any
@Component({
	selector: 'template-rma-form',
	templateUrl: './rma-form.html',
	styleUrls: ['./rma-form.scss'],
	encapsulation: ViewEncapsulation.None
})

export class PageRmaFormTemplate implements OnInit {
	rmaForm: FormGroup
	page: any
	countryList: any;
	problemTypeList: any;
	constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
		private formBuilder: FormBuilder,
		private userService: UserService,
		public router: Router,
		public appConstant: AppConstants,
	) {
		this.page = {
			title: 'RMA Form',
			postType: 'page'
		}
		this.countryList = appConstant.getCountryList();
		this.problemTypeList = appConstant.getProblemType();
	}
	ngOnInit() {
		this.rmaForm = this.formBuilder.group({
			name: ['', Validators.required],
            email: ['', Validators.required],
			title: ['', Validators.required],
            phone: ['', Validators.required],
			company: ['', Validators.required],
			mobilePhone: [''],
			fax: [''],
			shipType: [''],
			fedEx: [''],
			ups: [''],
			otherShip: [''],
			shippingName: [''],
			shippingCompany: [''],
			country: [''],
			address1: ['', Validators.required],
			address2: [''],
			city: [''],
			state: [''],
			zipcode: [''],
			problemDescription: [''],
			model: [''],
			serialNumber: [''],
			partModel: [''],
			problemType: [''],
			repairPO: [''],
		})
	}
	contact() {
		if (this.rmaForm.valid) {
			this.userService.login(this.rmaForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
              $.fn.iaoAlert({msg: "Request submitted successfully.", type: "success", mode: "dark" })
							this.rmaForm.reset()
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
