import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'pi-cms';
  constructor(@Inject(WINDOW) private window: Window, ) {
    
  }
  ngOnInit() {
    $(document).ready(function() {
      $('body').on('click', '.box .head', function(){
        $(this).parents('.box').find('.body').toggleClass('closed')
      }).on('click', '.accordion .head', function(){
        $(this).parents('.accordion').find('.body').toggleClass('closed')
      })
      $(this.window).scroll(function(){
        let scrolledWidth = 0
        let doc = document.getElementsByTagName('body')[0];
        let scrolledHeight = this.window.scrollY
        scrolledWidth = (this.window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        scrolledWidth = scrolledWidth * scrolledHeight/doc.scrollHeight
        $('body').find('.progress-bar .progress').css('width',scrolledWidth+'px')
      })
    })
  }
}