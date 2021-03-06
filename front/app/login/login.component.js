var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
    }
    LoginComponent.prototype.test = function () {
        console.log("test");
    };
    LoginComponent.prototype.login = function () {
        if (this.buttonState()) {
            return;
        }
        else {
            console.log("Email entered: " + this.email);
            this.userService.login(this.email);
        }
    };
    LoginComponent.prototype.buttonState = function () {
        return !Boolean(this.email);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        "templateUrl": "login.component.html"
    }),
    __metadata("design:paramtypes", [UserService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map