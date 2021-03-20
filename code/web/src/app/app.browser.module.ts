import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AuthGuardService } from './guard/auth.guard';
import { AppConstants } from './app.constants';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
import { ContentService } from './services/content.service';
import { PostTemplate } from './templates/post/post';
import { PageNotFoundTemplate } from './templates/page-not-found/page-not-found';
import { AdminDashboardTemplate } from './templates/admin/dashboard/dashboard';
import { AdminPostTemplate } from './templates/admin/post/post';
import { HeaderWidget } from './widgets/header/header';
import { FooterWidget } from './widgets/footer/footer';
import { AdminFooterWidget } from './widgets/admin/footer/footer';
import { AdminHeaderWidget } from './widgets/admin/header/header';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarWidget } from './widgets/admin/sidebar/sidebar';
import { LoginTemplate } from './templates/admin/login/login';
import { AdminSeoTemplate } from './templates/admin/seo/seo';
import { AdminMediaTemplate } from './templates/admin/media/media';
import { AdminPostsTemplate } from './templates/admin/posts/posts';
import { NgSelect2Module } from 'ng-select2';
import { AdminPageNotFoundTemplate } from './templates/admin/page-not-found/page-not-found';
import { AdminUsersTemplate } from './templates/admin/users/users';
import { AdminUserTemplate } from './templates/admin/user/user';
import { NgxSpinnerModule } from "ngx-spinner";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AdminMediaWidget } from './widgets/admin/media/media';
import { AdminSettingsTemplate } from './templates/admin/settings/settings';
import { AdminOptionsTemplate } from './templates/admin/options/options';
import { PageContactTemplate } from './pages/contact-form/contact-form';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { PageAskAnExpertTemplate } from './pages/ask-an-expert/ask-an-expert';
import { PageEmailCaptureTemplate } from './pages/email-capture/email-capture';
import { PageNewsletterRequestTemplate } from './pages/newsletter-request/newsletter-request';
import { PagePressReleasesTemplate } from './pages/press-releases/press-releases';
import { PageRmaFormTemplate } from './pages/rma-form/rma-form';
import { PageTrainingRequestTemplate } from './pages/training-request/training-request';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {DpDatePickerModule} from 'ng2-date-picker';
import { AdminProductVideoWidget } from './widgets/admin/product-video/product-video';
import { AdminPdfWidget } from './widgets/admin/pdf/pdf';
import { AdminSitemapTemplate } from './templates/admin/sitemap/sitemap';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { PageBlogTemplate } from './pages/blog/blog';
import { PageCaseStudiesTemplate } from './pages/case-studies/case-studies';
import { NgChartjsModule } from 'ng-chartjs';
import { ChatFixedWidget } from './widgets/chat-fixed/chat-fixed';
import { ChatService } from './services/chat.service';
import { AdminRobotsTemplate } from './templates/admin/robots/robots';
import { AdminChatbotTemplate } from './templates/admin/chatbot/chatbot';
import { ReviewsSliderWidget } from './widgets/reviews-slider/reviews-slider';
import { SidebarWidget } from './widgets/sidebar/sidebar';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    NgSelect2Module,
    NgxSpinnerModule,
    SlickCarouselModule,
    NgxTypedJsModule,
    DpDatePickerModule,
    NgxImageZoomModule.forRoot(),
    NgChartjsModule,
    HttpClientModule,
    AppModule,
    BrowserTransferStateModule
  ],
  exports: [
    FormsModule
  ],
  providers: [
    HttpClient,
		ContentService,
		DataService,
    UserService,
    ChatService,
		AppConstants,
    AuthGuardService,
    ErrorInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
