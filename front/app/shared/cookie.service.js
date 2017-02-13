var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
// Cookies imported globally from cookies.js
// import Cookies = require("js-cookie")
var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.set = function (key, value) {
        Cookies.set(key, value);
    };
    CookieService.prototype.get = function (key) {
        return Cookies.get(key);
    };
    CookieService.prototype.remove = function (key) {
        Cookies.remove(key);
    };
    return CookieService;
}());
CookieService = __decorate([
    Injectable()
], CookieService);
export { CookieService };
//# sourceMappingURL=cookie.service.js.map