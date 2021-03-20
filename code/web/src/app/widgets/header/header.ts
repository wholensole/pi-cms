import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ContentService } from 'src/app/services/content.service';
declare var $: any;

@Component({
	selector: 'widget-header',
	templateUrl: './header.html',
	styleUrls: ['./header.scss'],
	encapsulation: ViewEncapsulation.None
})

export class HeaderWidget implements OnInit {
  showMobileNav: Boolean = false
  posts: any
	route: string
	publicNavLinks: any[]
	searchBoxVisible: Boolean = false
	searchForm: FormGroup
	constructor(
		private formBuilder: FormBuilder,
    private dataService: DataService,
    private contentService: ContentService,
		public router: Router,
		private location: Location
	) {
		this.searchForm = this.formBuilder.group({
			searchData: ['', Validators.required]
		})
		this.router.events.subscribe(val => {
			if (this.location.path() != "") {
			  	this.route = this.location.path();
			} else {
			  	this.route = "/home";
			}
		});
		this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.scrollToTop()
        });
	}
	scrollToTop() {
		$('html,body').animate({ scrollTop: 0 }, '3000');
		return false;
	}
	ngOnInit() {
    $.getScript(
      "/assets/js/iao-alert.jquery.min.js"
    );
    this.renderMenu()
	}
	showSearchForm() {
		this.searchBoxVisible = true
  }
  renderMenu() {
    let publicNavLinks = []
    this.contentService.getPublicMenu().subscribe(
			(data: any) => {
				if(data) {
          data.forEach(e => {
            publicNavLinks.push(e)
          });
          this.publicNavLinks = publicNavLinks
				}else {

				}
			},
			error => {

			}
		)
  }
	search() {
    let data = {'postType': 'case-study', 'pageNumber': 0, 'pageSize': 1000, 'key': this.searchForm.value.searchData}
		this.dataService.getAll(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.posts = data.data
					} else {
						this.posts = []
					}
				}else {

				}
			},
			error => {

			}
		)
	}
}
