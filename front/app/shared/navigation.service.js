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
import { ReplaySubject } from "rxjs/ReplaySubject";
var NavigationService = (function () {
    function NavigationService() {
        this._currentPosition = null;
        this.currentPositionSubject = new ReplaySubject(1);
        this.track();
    }
    NavigationService.prototype.track = function () {
        var _this = this;
        this.watchId = window.navigator.geolocation.watchPosition(function (pos) {
            _this.currentPositionSubject.next({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                accuracy: pos.coords.accuracy
            });
        });
        this.currentPositionSubject.subscribe(function (pos) {
            _this._currentPosition = pos;
        });
    };
    NavigationService.prototype.getCurrentPosition = function () {
        return this.currentPositionSubject;
    };
    Object.defineProperty(NavigationService.prototype, "currentPosition", {
        get: function () {
            return this._currentPosition;
        },
        enumerable: true,
        configurable: true
    });
    return NavigationService;
}());
NavigationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], NavigationService);
export { NavigationService };
//# sourceMappingURL=navigation.service.js.map