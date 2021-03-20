import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AppConstants } from 'src/app/app.constants';
declare var $: any;

@Component({
	selector: 'widget-reviews-slider',
	templateUrl: './reviews-slider.html',
	styleUrls: ['./reviews-slider.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ReviewsSliderWidget implements OnInit {
	posts: any = []
	imageBase: any = this.appConstants.imageBase
	constructor(
		public router: Router,
		private appConstants: AppConstants,
		public dataService: DataService
	) {
	}
	ngOnInit() {
		this.getPosts()
	}
	getPosts() {
		let data = {'postType': 'case-study', 'pageNumber': 0, 'pageSize': 6}
		this.dataService.getPosts(data).subscribe(
			(data: any) => {
				if(data) {
					if (data.success==1) {
						this.posts = data.data
						$(document).ready(function () {
							let rSlider = $('.reviews-slider').slick({
								slidesToShow: 3,
								slidesToScroll: 1,
								autoplay: true,
								autoplaySpeed: 2000,
								arrows: false
							})
							setTimeout(function(){
								rSlider.slick('slickPlay');
								rSlider.slick('slickGoTo', 1);
							}, 1000);
						})
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