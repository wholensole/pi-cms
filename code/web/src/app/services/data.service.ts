import { Injectable } from '@angular/core'
import { ContentService } from './content.service'
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataService {
    baseURL: string
    constructor(private contentService: ContentService) {
        this.baseURL = this.contentService.baseURL
    }
    getDashboardData() {
        return this.contentService.getData(this.baseURL+'/?action=get_dashboard')
    }
    savePost(data) {
        return this.contentService.postData(this.baseURL+'/?action=save_post', data);
    }
    getRobots() {
        return this.contentService.getData(this.baseURL+'/?action=get_robots')
    }
    generateSitemap() {
        return this.contentService.getData(this.baseURL+'/?action=sitemap');
    }
    generateRobots(data) {
        return this.contentService.postData(this.baseURL+'/?action=robots', data);
    }
    trashPost(data) {
        return this.contentService.postData(this.baseURL+'/?action=trash_post', data);
    }
    deletePost(data) {
        return this.contentService.postData(this.baseURL+'/?action=delete_post', data);
    }
    deleteMedia(data) {
        return this.contentService.postData(this.baseURL+'/?action=delete_media', data);
    }
    getPost(data) {
        return this.contentService.postData(this.baseURL+'/?action=get_post', data);
    }
    renderPost(data) {
        return this.contentService.postData(this.baseURL+'/?action=render_post', data);
    }
    getPosts(data) {
        return this.contentService.postData(this.baseURL+'/?action=get_posts', data)
    }
    getAll(data) {
        return this.contentService.postData(this.baseURL+'/?action=get_all', data)
    }
    addMedia(data) {
        return this.contentService.postData(this.baseURL+'/?action=add_media', data);
    }
    addVideo(data) {
        return this.contentService.postData(this.baseURL+'/?action=add_video', data);
    }
    addPdf(data) {
        return this.contentService.postData(this.baseURL+'/?action=add_pdf', data);
    }
    getMedia(type = '') {
        if (type!= '') {
            return this.contentService.getData(this.baseURL+'/?action=get_media&type='+type)
        }else {
            return this.contentService.getData(this.baseURL+'/?action=get_media')
        }
    }
}
