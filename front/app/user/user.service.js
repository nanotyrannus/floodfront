var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { RestService } from "../shared/rest.service";
import { CookieService } from "../shared/cookie.service";
import { Router } from "@angular/router";
var UserService = (function () {
    function UserService(rest, router, cookieService) {
        this.rest = rest;
        this.router = router;
        this.cookieService = cookieService;
        this.loggedIn = false;
        this.isAdmin = false;
        /**
         * Rudimentary logout. Must replace with cookie based session.
         */
        if (!this.cookieService.get("email")) {
            this.router.navigate(['/']);
        }
        else {
            this.email = this.cookieService.get("email");
        }
    }
    UserService.prototype.login = function (email) {
        var _this = this;
        this.rest.post("/login", { "email": email }).subscribe(function (data) {
            _this.cookieService.set("email", email);
            console.log(data);
            console.log("post: no error");
            _this.router.navigate(['/event']);
        }, function (error) {
            console.error(error);
        });
    };
    UserService.prototype.logout = function () {
        this.cookieService.remove("email");
        this.router.navigate(["/"]);
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [RestService, Router, CookieService])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map