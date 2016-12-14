import { Injectable } from "@angular/core"
import { Http } from "@angular/http"
import { Observable } from "rxjs/Observable"
import { EnvironmentService } from "./environment.service"

@Injectable()
export class RestService {

    constructor (private http: Http, 
                 private env: EnvironmentService) {} 

    public post(path: string, body: any, options: any = null): Observable<any> {
        return this.http.post(`${this.env.baseUrl}${ path }`, body, options)
    }

    public get(path: string, options: any = null):Observable<any> {
        return this.http.get(`${ this.env.baseUrl }${ path }`, options)
    }
}