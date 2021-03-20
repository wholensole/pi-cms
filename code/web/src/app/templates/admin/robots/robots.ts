import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Select2OptionData } from 'ng-select2'
import { Options } from 'select2'
import { DataService } from 'src/app/services/data.service'
declare var $: any

@Component({
	selector: 'template-admin-robots',
	templateUrl: './robots.html',
	styleUrls: ['./robots.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminRobotsTemplate implements OnInit {
	activeSlug: String = ''
	showMediaModal: Boolean = false
	categoriesData = []
	tagsData = []
	postType: any
	statusData: any
	layoutData: any
	editorValue: String = '<p>Enter Post content here</p>'
	editorOptions: any
	postAction: String = 'save'
	imageBase: String
	id : any
	robotsForm: FormGroup
	action: any
	urls = []
	renderSlug: Boolean = false
	page = {
		title: 'Robots.txt',
		postType: 'post'
	}
	public exampleData: Array<Select2OptionData>
	public categoryOptions: Options
	public tagOptions: Options
	public statusOptions: Options
	public layoutOptions: Options
	public value: string[]
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder,
		private dataService: DataService,
	) {
		route.params.subscribe(val => {

			this.robotsForm = this.formBuilder.group({
				urls: ['', Validators.required],
			})
			this.getRobots();
		});
	}
	ngOnInit() {

	}
	getRobots() {
		this.dataService.getRobots().subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.robotsForm.get("urls").setValue(data.data)

					} else {
						// this.router.navigate(['sitemap'])
					}
				}else {

				}
			},
			error => {

			}
		)
	}
	saveRobots() {
		let data
		data = this.robotsForm.value
		this.dataService.generateRobots(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						$.fn.iaoAlert({msg: "robots file updated successfully.", type: "success", mode: "dark" })
					} else {
						$.fn.iaoAlert({msg: "error in updateing robots.", type: "error", mode: "dark" })
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
}
