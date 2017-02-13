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
import { Http } from "@angular/http";
import { EnvironmentService } from "./environment.service";
var RestService = (function () {
    function RestService(http, env) {
        this.http = http;
        this.env = env;
    }
    RestService.prototype.post = function (path, body, options) {
        if (options === void 0) { options = null; }
        return this.http.post("" + this.env.baseUrl + path, body, options);
    };
    RestService.prototype.get = function (path, options) {
        if (options === void 0) { options = null; }
        return this.http.get("" + this.env.baseUrl + path, options);
    };
    return RestService;
}());
RestService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        EnvironmentService])
], RestService);
export { RestService };
//# sourceMappingURL=rest.service.js.map