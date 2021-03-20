import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { UserService } from 'src/app/services/user.service';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Component({
	selector: 'template-admin-user',
	templateUrl: './user.html',
	styleUrls: ['./user.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminUserTemplate implements OnInit {
	postType: any
	userForm: FormGroup
	action: any
	id: any = null
	rolesData: any
	statusData: any
	page = {
		title: 'Add New User'
	}
	public exampleData: Array<Select2OptionData>;
	public roleOptions: Options;
	statusOptions: Options;
	public value: string[];
	constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
		private route: ActivatedRoute,
		public router: Router,
		private formBuilder: FormBuilder,
		private userService: UserService
	) {}
	ngOnInit() {
		if(this.router.url == '/admin/my-account') {
			this.action = 'edit'
			this.id = JSON.parse(this.localStorage.getItem('userData')).id
			this.page.title = 'My Account'
			this.getUser(this.id)
		} else {
			this.action = (this.route.snapshot.paramMap.get('action'))?this.route.snapshot.paramMap.get('action'):'';
			this.id = (this.action == 'add')?'':this.route.snapshot.paramMap.get('id')
			if (this.action == 'edit') {
				if (this.id == null) {
					this.router.navigate(['/admin/users'])
				} else {
					this.getUser(this.id)
					this.page = {
						title: 'Edit User'
					}
				}
			}
		}
		this.roleOptions = {
			width: '240',
			multiple: false,
			tags: false
		};
		this.statusOptions = {
			width: '240',
			multiple: false,
			tags: false
		};
		this.rolesData = [
			'user',
			'admin',
			'editor',
			'subscriber'
		]
		this.statusData = [
			'active',
			'trashed',
			'deactive'
		]
		this.userForm = this.formBuilder.group({
			username: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			f_name: ['', Validators.required],
			m_name: [''],
			l_name: [''],
			role:  ['user', Validators.required],
			status:  ['active', Validators.required]
		})
	}
	getUser(id) {
		let data = {id: id}
		this.userService.getUser(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						let u = data.data[0]
						this.userForm.get("username").setValue(u.username);
						this.userForm.get("email").setValue(u.email);
						this.userForm.get("password").setValue(u.password);
						this.userForm.get("f_name").setValue(u.f_name);
						this.userForm.get("l_name").setValue(u.l_name);
						this.userForm.get("m_name").setValue(u.m_name);
						this.userForm.get("role").setValue(u.role);
						this.userForm.get("status").setValue(u.status);
					} else {
						this.router.navigate(['/admin/users'])
					}
				}else {

				}
			},
			error => {

			}
		)
	}
	saveUser() {
		let data
		if(this.id != null && this.id != '') {
			data = Object.assign(this.userForm.value, {'isEdit':1, 'id': this.id})
		} else {
			data = this.userForm.value
		}
		this.userService.saveUser(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.userForm.reset()
						this.router.navigate(['/admin/users'])
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
