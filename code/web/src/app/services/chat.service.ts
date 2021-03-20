import { Injectable } from '@angular/core'
import { ContentService } from './content.service'
import { Router } from '@angular/router'
import { AppConstants } from '../app.constants'
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ChatService {
    baseURL: string
    constructor(
        private contentService: ContentService,
        public router: Router,
        public appConstants: AppConstants
    ) {
        this.baseURL = this.contentService.baseURL
    }
    getChatData() {
        return this.contentService.getData(this.baseURL+'/?action=get_chatdata')
	}
	getGenericData() {
        return this.contentService.getData(this.baseURL+'/?action=get_genericdata')
    }
	saveMessage(data) {
        return this.contentService.postData(this.baseURL+'/?action=save_message', data)
    }
	deleteMessage(data) {
        return this.contentService.postData(this.baseURL+'/?action=delete_message', data)
    }
}