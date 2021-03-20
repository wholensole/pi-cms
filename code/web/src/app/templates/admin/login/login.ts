import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
declare var $: any

@Component({
	selector: 'template-login',
	templateUrl: './login.html',
	styleUrls: ['./login.scss'],
	encapsulation: ViewEncapsulation.None
})

export class LoginTemplate implements OnInit {
	loginForm: FormGroup
	activeForm:string;
	constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
		private formBuilder: FormBuilder,
		private userService: UserService,
		public router: Router
	) {
	}
	ngOnInit() {
    $.getScript(
      "/assets/js/iao-alert.jquery.min.js"
    );
		if (this.userService.isLoggedIn()) {
			this.router.navigate(['admin'])
		}
		this.activeForm = 'login'
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
            password: ['', Validators.required]
		})
	}
	login() {
		if (this.loginForm.valid) {
			this.userService.login(this.loginForm.value)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
              $.fn.iaoAlert({msg: "Logged in successfully.", type: "success", mode: "dark" })
							this.loginForm.reset()
							this.localStorage.setItem('userData', JSON.stringify(data.data))
							this.router.navigate(['admin']);
						} else {
              $.fn.iaoAlert({msg: "Invalid credentials", type: "error", mode: "dark" })
						}
					}else {
            $.fn.iaoAlert({msg: "Unable to login.", type: "error", mode: "dark" })
					}
				},
				error => {
          $.fn.iaoAlert({msg: "Unable to login.", type: "error", mode: "dark" })
				}
			)
		}
	}
}
