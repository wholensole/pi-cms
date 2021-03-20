import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AppConstants } from '../app.constants';
import { Observable } from 'rxjs';
const httpOptions: Object = new HttpHeaders({
    'Accept': '*',
    'Access-Control-Allow-Credentials': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=UTF-8',
    'Upgrade-Insecure-Requests': '1',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
});

@Injectable({
    providedIn: 'root'
})

export class ContentService {
    baseURL: string
    d : any
    constructor(
        private http: HttpClient,
        public appConstants: AppConstants
    ) {
        this.baseURL = this.appConstants.baseURL+'index.php'
    }
    getData(url: any) {
        this.d = new Date()
        return this.http.get<any[]>(url+'&version='+this.d.getTime(), httpOptions);
    }
    postData(url: any, data?: any) {
        this.d = new Date()
        return this.http.post<any[]>(url+'&version='+this.d.getTime(), data, httpOptions);
    }
    public getPublicMenu(): Observable<any> {
        return this.http.get("./assets/data/public-menu.json")
    }
    public getAdminMenu(): Observable<any> {
        return this.http.get("./assets/data/admin-menu.json")
    }
}
