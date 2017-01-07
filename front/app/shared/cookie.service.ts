import { Injectable } from "@angular/core"
declare let Cookies:any
// Cookies imported globally from cookies.js
// import Cookies = require("js-cookie")

@Injectable()
export class CookieService {
    public set(key: string, value: any) {
        Cookies.set(key, value)
    }

    public get(key: string): any {
        return Cookies.get(key)
    }

    public remove(key: string): void {
        Cookies.remove(key)
    }
}