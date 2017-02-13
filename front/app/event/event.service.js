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
var EventService = (function () {
    function EventService(rest) {
        this.rest = rest;
    }
    EventService.prototype.getEvents = function () {
        return this.rest.get("/event");
    };
    Object.defineProperty(EventService.prototype, "eventId", {
        get: function () {
            return this._eventId;
        },
        set: function (value) {
            this._eventId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventService.prototype, "eventName", {
        get: function () {
            return this._eventName;
        },
        set: function (value) {
            this._eventName = value;
        },
        enumerable: true,
        configurable: true
    });
    EventService.prototype.createEvent = function (name, desc, bounds) {
        console.log("EventService#createEvent() called");
        this.rest.post("/event", { "name": name, "description": desc, "bounds": bounds }).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    return EventService;
}());
EventService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [RestService])
], EventService);
export { EventService };
var Bounds = (function () {
    function Bounds() {
    }
    return Bounds;
}());
//# sourceMappingURL=event.service.js.map