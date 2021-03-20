import { Injectable, Inject } from '@angular/core'
import { ContentService } from './content.service'
import { Router } from '@angular/router';
import { LOCAL_STORAGE } from '@ng-toolkit/universal'
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UserService {
    baseURL: string
    constructor(@Inject(LOCAL_STORAGE) private localStorage: any, 
        private contentService: ContentService,
        public router: Router,
    ) {
        this.baseURL = this.contentService.baseURL
    }
    getCurrentUserData() {
        return JSON.parse(this.localStorage.getItem('userData'))
    }
    login(data){
        return this.contentService.postData(this.baseURL+'/?action=login', data)
    }
    requestAQuote(data){
        return this.contentService.postData(this.baseURL+'/?action=request_a_quote', data)
    }
    emailCapture(data){
        return this.contentService.postData(this.baseURL+'/?action=email_capture', data)
    }
    contact(data){
        return this.contentService.postData(this.baseURL+'/?action=contact', data)
    }
    newsletterRequest(data){
        return this.contentService.postData(this.baseURL+'/?action=newsletter_request', data)
    }
    trainingRequest(data) {
        return this.contentService.postData(this.baseURL+'/?action=training_request', data)
    }
    saveUser(data) {
        return this.contentService.postData(this.baseURL+'/?action=save_user', data)
    }
    isLoggedIn() {
        return (this.localStorage.getItem('userData'))?true:false
    }
    getUsers(){
        return this.contentService.getData(this.baseURL+'/?action=get_users')
    }
    getUser(id){
        return this.contentService.postData(this.baseURL+'/?action=get_user', id)
    }
    logout() {
        this.localStorage.removeItem('userData')
        this.router.navigate(['login'])
    }
}