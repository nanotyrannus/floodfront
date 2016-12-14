"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var rest_service_1 = require("../shared/rest.service");
var router_1 = require("@angular/router");
var UserService = (function () {
    function UserService(rest, router) {
        this.rest = rest;
        this.router = router;
        this.loggedIn = false;
        this.isAdmin = false;
        /**
         * Rudimentary logout. Must replace with cookie based session.
         */
        if (!this.email) {
            this.router.navigate(['/']);
        }
    }
    UserService.prototype.login = function (email) {
        var _this = this;
        this.rest.post("/login", { "email": email }).subscribe(function (data) {
            _this.email = email;
            console.log(data);
            console.log("post: no error");
            _this.router.navigate(['/event']);
        }, function (error) {
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map