import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core'
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { WINDOW } from '@ng-toolkit/universal';
import { ContentService } from 'src/app/services/content.service';

@Component({
	selector: 'widget-admin-sidebar',
	templateUrl: './sidebar.html',
	styleUrls: ['./sidebar.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminSidebarWidget implements OnInit {
  	pageTitle: String
	route: string
	activeUrl: any
	navLinks: any
	constructor(@Inject(WINDOW) private window: Window,
		public router: Router,
		private location: Location,
    private contentService: ContentService,
	) {
		this.router.events.subscribe(val => {
			if (this.location.path() != "") {
			  	this.route = this.location.path();
			} else {
			  	this.route = "/home";
      }
      this.renderMenu()
		});
	}
	ngOnInit() {
		let obj = this
		obj.handleSidebar()
		this.window.addEventListener("resize", function () {
			obj.handleSidebar()
		})
		this.router.routeReuseStrategy.shouldReuseRoute = function (future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot) {
			return (future.routeConfig === curr.routeConfig);
		};
  }
  renderMenu() {
    let navLinks = []
    this.contentService.getAdminMenu().subscribe(
			(data: any) => {
				if(data) {
          data.forEach(e => {
            navLinks.push(e)
          });
          this.navLinks = navLinks
				}else {

				}
			},
			error => {

			}
    )
    if (JSON.parse(localStorage.userData).role=='admin') {
      this.navLinks.push({
        'icon': 'hi-users',
        'url': '/users',
        'title': 'Users',
        'subLinks': [
          {
            'icon': 'hi-users',
            'url': '/users',
            'title': 'All Users'
          },
          {
            'icon': 'hi-user-plus',
            'url': '/user/add',
            'title': 'Add User'
          }
        ]
      })
    }
  }
	handleSidebar() {
		let elem = document.getElementsByTagName('widget-admin-sidebar')[0]
		elem.className = (this.window.innerWidth < 800) ? 'open':''
	}
	isActiveLink(subLinks) {
		if (subLinks) {
			subLinks.forEach(elem => {
				//console.log('/admin'+elem.url , this.route, '/admin'+elem.url == this.route)
				if ('/admin'+elem.url == this.route) {
					return true
				}
			});
		}
		return false
	}
}
