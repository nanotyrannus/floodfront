var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef } from "@angular/core";
var PopupComponent = (function () {
    function PopupComponent(ref) {
        this.ref = ref;
        this.isVisible = false;
    }
    PopupComponent.prototype.display = function () {
        if (this.isVisible) {
            return "visible";
        }
        else {
            return "hidden";
        }
    };
    PopupComponent.prototype.toggleVisibility = function () {
        this.isVisible = !this.isVisible;
    };
    PopupComponent.prototype.show = function () {
        this.isVisible = true;
    };
    PopupComponent.prototype.hide = function () {
        this.isVisible = false;
    };
    PopupComponent.prototype.getCoords = function () {
        return [this.x, this.y];
    };
    PopupComponent.prototype.setCoords = function (x, y) {
        console.log("width: " + this.width + ", height: " + this.height);
        this.x = x - Math.floor(this.width / 2);
        this.y = y - Math.floor(this.height) - 30;
    };
    PopupComponent.prototype.setDimensions = function (deviceWidth, deviceHeight) {
        this.width = Math.floor(deviceWidth / 4);
        this.height = Math.floor(deviceHeight / 3);
    };
    PopupComponent.prototype.setMarker = function (marker) {
        this.marker = marker;
    };
    return PopupComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Number)
], PopupComponent.prototype, "x", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PopupComponent.prototype, "y", void 0);
PopupComponent = __decorate([
    Component({
        "templateUrl": "popup.component.html",
        "selector": "popup",
        "styles": ["\n        .popup { \n            position: fixed; \n            background-color: white;\n            z-index: 402;\n            top: 0;\n            left: 0;    \n        }\n    "]
    }),
    __metadata("design:paramtypes", [ElementRef])
], PopupComponent);
export { PopupComponent };
//# sourceMappingURL=popup.component.js.map