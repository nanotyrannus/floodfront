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
var router_1 = require("@angular/router");
var event_service_1 = require("./event.service");
var rest_service_1 = require("../shared/rest.service");
var environment_service_1 = require("../shared/environment.service");
var EventComponent = (function () {
    function EventComponent(env, rest, eventService, router) {
        this.env = env;
        this.rest = rest;
        this.eventService = eventService;
        this.router = router;
    }
    EventComponent.prototype.ngOnInit = function () {
        console.log("Base URL : " + this.env.baseUrl);
        // this.rest.post("/ping", {"hey" : 1}).subscribe(data => {
        //   console.log(data.json())
        // }, error => {
        //   console.error(error)
        // })
        this.getEvents();
    };
    EventComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (data) {
            var events = data.json();
            _this.events = events;
            console.log(events);
        }, function (error) {
            console.error(error);
        });
    };
    EventComponent.prototype.enterEvent = function (eventId, eventName, bounds) {
        console.log("enterEvent: " + eventId + ": " + eventName);
        this.eventService.eventId = eventId;
        this.eventService.eventName = eventName;
        this.eventService.bounds = JSON.parse(bounds);
        this.router.navigate(['/map']);
    };
    EventComponent.prototype.createEvent = function () {
        console.log("create event clicked");
        this.eventService.createEvent(this.eventName, this.description, {
            "minLon": this.minLon,
            "minLat": this.minLat,
            "maxLat": this.maxLat,
            "maxLon": this.maxLon
        });
    };
    EventComponent.prototype.createEventButtonState = function () {
        return !(this.description && this.eventName && this.maxLat && this.maxLon && this.minLat && this.minLon);
    };
    /**Test
     *
     */
    EventComponent.prototype.uploadImage = function () {
        if (!this.file)
            return;
        console.log(this.file);
        var formData = new FormData();
        formData.append("image", this.file);
        formData.append("foo", "bar");
        var xhr = new XMLHttpRequest();
        xhr.open("POST", window.location.protocol + "//" + window.location.hostname + ":8080/upload");
        xhr.send(formData);
    };
    EventComponent.prototype.readUrl = function (value) {
        var _this = this;
        var test = document.getElementById("test");
        var reader = new FileReader();
        reader.onload = function (e) {
            test['src'] = e.target['result'];
            _this.dataUrl = test['src'];
        };
        reader.readAsDataURL(value.target.files[0]);
        this.file = value.target.files[0];
        console.log("readURL called");
        console.log(value);
    };
    return EventComponent;
}());
EventComponent = __decorate([
    core_1.Component({
        selector: 'event-component',
        templateUrl: '/app/event/event.component.html'
    }),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        rest_service_1.RestService,
        event_service_1.EventService,
        router_1.Router])
], EventComponent);
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map