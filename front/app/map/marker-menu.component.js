var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from "@angular/core";
import { MarkerType } from "./marker.enum";
/**
 * Was a menu to choose marker type,
 * repurposed into info bubble.
 */
var MarkerMenuComponent = (function () {
    function MarkerMenuComponent() {
        this.isVisible = false;
        this.visibility = "hidden";
        this.markerType = MarkerType;
        this.className = "marker-menu-container-hidden";
        this.onMarkerPicked = new EventEmitter();
    }
    /**
     * Open menu
     */
    MarkerMenuComponent.prototype.open = function () {
        this.className = "marker-menu-container-visible";
    };
    /**
     * Close menu
     */
    MarkerMenuComponent.prototype.close = function () {
        this.className = "marker-menu-container-hidden";
    };
    MarkerMenuComponent.prototype.toggle = function () {
        if (this.isVisible) {
            this.visibility = "hidden";
        }
        else {
            this.visibility = "visible";
        }
        this.isVisible = !this.isVisible;
    };
    /**
     * Send choice to LeafletMapComponent
     * Close menu
     */
    MarkerMenuComponent.prototype.pickMarker = function (type) {
        this.onMarkerPicked.emit(type);
        console.log("Picked marker: " + type, type);
        this.close();
    };
    return MarkerMenuComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], MarkerMenuComponent.prototype, "onMarkerPicked", void 0);
MarkerMenuComponent = __decorate([
    Component({
        "selector": "marker-menu",
        "templateUrl": "marker-menu.component.html",
        "styles": ["\n        .marker-menu-container-visible {\n            background-color: white;\n            z-index: 401;\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0%;\n            left: 0%;\n            trasition: top 1s, left 1s;\n        }\n    ", "\n        .marker-menu-container-hidden {\n            background-color: white;\n            z-index: 401;\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 100%;\n            left: 0%;\n            trasition: top 1s, left 1s;\n        }\n    "]
    })
], MarkerMenuComponent);
export { MarkerMenuComponent };
//# sourceMappingURL=marker-menu.component.js.map