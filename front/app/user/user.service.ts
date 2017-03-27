import { Injectable } from "@angular/core"
import { RestService } from "../shared/rest.service"
import { CookieService } from "../shared/cookie.service"
import { Observable } from "rxjs/Observable"
import { Router } from "@angular/router"

@Injectable()
export class UserService {
    public firstName: string
    public lastName: string
    public email: string
    public loggedIn: boolean = false
    public isAdmin: boolean = false

    constructor(private rest: RestService, private router: Router, private cookieService: CookieService) {
        /**
         * Rudimentary logout. Must replace with cookie based session.
         */
        if (!this.cookieService.get("email")) {
            this.router.navigate(['/'])
        } else {
            this.email = this.cookieService.get("email")
        }
    }

    login(email: string): void {
        this.rest.post("/login", { "email": email }).subscribe(
            data => {
                this.cookieService.set("email", email)
                console.log(data)
                console.log("post: no error")
                this.router.navigate(['/select'])
                // this.router.navigate(['/event'])
            },
            error => {
                console.error(error)
            }
        )
    }

    logout(): void {
        this.cookieService.remove("email")
        this.router.navigate(["/"])
    }
}