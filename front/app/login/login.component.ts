import { Component } from "@angular/core"
import { UserService } from "../user/user.service"

@Component({
    "templateUrl": "login.component.html"
})
export class LoginComponent {

    public email: string

    constructor(private userService: UserService) { }

    test() {
        console.log("test")
    }

    login() {
        if (this.buttonState()) {
            return
        } else {
            console.log(`Email entered: ${ this.email }`)
            this.userService.login(this.email)
        }
    }

    buttonState() {
        return !Boolean(this.email)
    }
}