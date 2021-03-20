import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundTemplate } from './templates/page-not-found/page-not-found';
import { PostTemplate } from './templates/post/post';
import { AdminDashboardTemplate } from './templates/admin/dashboard/dashboard';
import { AdminPostTemplate } from './templates/admin/post/post';
import { LoginTemplate } from './templates/admin/login/login';
import { AdminSeoTemplate } from './templates/admin/seo/seo';
import { AdminMediaTemplate } from './templates/admin/media/media';
import { AdminPostsTemplate } from './templates/admin/posts/posts';
import { AdminUsersTemplate } from './templates/admin/users/users';
import { AdminUserTemplate } from './templates/admin/user/user';
import { AuthGuardService } from './guard/auth.guard';
import { PageContactTemplate } from './pages/contact-form/contact-form';
import { PageTrainingRequestTemplate } from './pages/training-request/training-request';
import { PageAskAnExpertTemplate } from './pages/ask-an-expert/ask-an-expert';
import { PageEmailCaptureTemplate } from './pages/email-capture/email-capture';
import { PageNewsletterRequestTemplate } from './pages/newsletter-request/newsletter-request';
import { PageRmaFormTemplate } from './pages/rma-form/rma-form';
import { PagePressReleasesTemplate } from './pages/press-releases/press-releases';
import { AdminSitemapTemplate } from './templates/admin/sitemap/sitemap';
import { PageBlogTemplate } from './pages/blog/blog';
import { PageCaseStudiesTemplate } from './pages/case-studies/case-studies';
import { AdminChatbotTemplate } from './templates/admin/chatbot/chatbot';
import { AdminRobotsTemplate } from './templates/admin/robots/robots';


const routes: Routes = [
  {
    path: 'error404',
    component: PageNotFoundTemplate,
		data: { title: 'Error - 404 | Page Not Found' }
  },
  {
    path: 'contact',
    component: PageContactTemplate,
    data: { title: 'Contact'}
  },
  {
    path: 'blog',
    component: PageBlogTemplate,
    data: { title: 'Blog'}
  },
  {
    path: 'case-studies',
    component: PageCaseStudiesTemplate,
    data: { title: 'Case Study'}
  },
  {
    path: 'training-request',
    component: PageTrainingRequestTemplate,
    data: { title: 'Request for Training'}
  },
  {
    path: 'ask-an-expert',
    component: PageAskAnExpertTemplate,
    data: { title: 'Ask an Expert'}
  },
  {
    path: 'email-capture',
    component: PageEmailCaptureTemplate,
    data: { title: 'Email Capture'}
  },
  {
    path: 'newsletter-request',
    component: PageNewsletterRequestTemplate,
    data: { title: 'Newsletter Request'}
  },
  {
    path: 'rma-form',
    component: PageRmaFormTemplate,
    data: { title: 'RMA Form'}
  },
  {
    path: 'press-releases',
    component: PagePressReleasesTemplate,
    data: { title: 'Press Releases'}
  },
  {
    path: 'solutions:id',
    component: PostTemplate,
    data: { title: 'Solutions'}
  },
  {
    path: 'suport:id',
    component: PostTemplate,
    data: { title: 'Support'}
  },
  {
    path: 'press-releases:id',
    component: PostTemplate,
    data: { title: 'Press Releases'}
  },
  {
    path: 'careers:id',
    component: PostTemplate,
    data: { title: 'Careers'}
  },
  {
    path: 'login',
    component: LoginTemplate,
    data: { title: 'Login'}
  },
  {
    path: 'admin',
    pathMatch: 'full',
    redirectTo: 'admin/dashboard',
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/seo',
    redirectTo: 'admin/sitemap',
    pathMatch: 'full',
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/media',
    component: AdminMediaTemplate,
    data: { title: 'Media'},
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/chatbot',
    pathMatch: 'full',
    redirectTo: 'admin/chatbot/generic',
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/chatbot/:msgType',
    component: AdminChatbotTemplate,
    data: { title: 'Chatbot'},
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/users',
    component: AdminUsersTemplate,
    data: { title: 'Users'},
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/user/:action',
    component: AdminUserTemplate,
    data: { title: 'User' },
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/user/:action/:id',
    component: AdminUserTemplate,
    data: { title: 'User' },
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardTemplate,
    data: { title: 'Dashboard'},
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/my-account',
    component: AdminUserTemplate,
    data: { title: 'My Account' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/post/:postType/:action',
    component: AdminPostTemplate,
    data: { title: 'Post' },
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/post/:postType/:action/:id',
    component: AdminPostTemplate,
    data: { title: 'Post' },
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/posts/:postType',
    component: AdminPostsTemplate,
    data: { title: 'All Posts' },
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/posts',
    redirectTo: 'admin/posts/post',
    pathMatch: 'full',
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/sitemap',
    component: AdminSitemapTemplate,
    data: { title: 'Sitemap' },
		canActivate: [AuthGuardService]
  },
  {
    path: 'admin/robots',
    component: AdminRobotsTemplate,
    data: { title: 'Robots' },
    canActivate: [AuthGuardService]
  },
  {
    path: ':slug',
    component: PostTemplate,
    data: { title: 'Page'}
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
		path: '**',
		component: PageNotFoundTemplate,
		data: { title: 'Error - 404 | Page Not Found' }
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
