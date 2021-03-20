import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
	selector: 'widget-sidebar',
	templateUrl: './sidebar.html',
	styleUrls: ['./sidebar.scss'],
	encapsulation: ViewEncapsulation.None
})

export class SidebarWidget implements OnInit {
	constructor(
	) {}
	ngOnInit() {
	}
}
