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
var NavigationService = (function () {
    function NavigationService() {
        this.currentPosition = null;
        this.track();
    }
    NavigationService.prototype.track = function () {
        var _this = this;
        this.watchId = window.navigator.geolocation.watchPosition(function (pos) {
            _this.currentPosition = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            };
        });
    };
    NavigationService.prototype.getCurrentPosition = function () {
        console.log(this.currentPosition);
        return this.currentPosition;
    };
    return NavigationService;
}());
NavigationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NavigationService);
exports.NavigationService = NavigationService;
//# sourceMappingURL=navigation.service.js.map