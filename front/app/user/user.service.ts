import { Injectable } from "@angular/core"
import { RestService } from "../shared/rest.service"
import { Observable } from "rxjs/Observable"
import { Router } from "@angular/router"

@Injectable()
export class UserService {
    public firstName: string
    public lastName: string
    public email: string
    public loggedIn: boolean = false
    public isAdmin: boolean = false

    constructor(private rest: RestService, private router: Router) {
        /**
         * Rudimentary logout. Must replace with cookie based session.
         */
        if (!this.email) {
            this.router.navigate(['/'])
        }
    }

    login(email: string): void {
        this.rest.post("/login", { "email" : email }).subscribe(
            data => {
                this.email = email
                console.log(data)
                console.log("post: no error")
                this.router.navigate(['/event'])
            },
            error => {

            }
        )
    }
}