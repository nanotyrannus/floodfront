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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var event_service_1 = require('../event/event.service');
// import * as L from '/node_modules/leaflet/dist/leaflet.js'
var L = require('/node_modules/leaflet/dist/leaflet.js');
var LeafletMapComponent = (function () {
    function LeafletMapComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.primed = false;
    }
    LeafletMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventName = this.eventService.eventName;
        this.eventId = this.eventService.eventId;
        this.bounds = this.eventService.bounds.coordinates;
        console.log("Getting markers for " + this.eventId + ": " + this.eventName);
        console.log(this.bounds);
        if (this.eventId == null) {
            console.warn("eventId null, returning to /event");
            this.router.navigate(['/event']);
        }
        this.leafletMap = L.map('map', {
            zoom: 12
        });
        // this.leafletMap.fitBounds(L.latLng(this.bounds[0][0][1], this.bounds[0][0][0]), L.latLng(this.bounds[0][2][1], this.bounds[0][2][0])) // Bottom left and top right corners of bbox
        // console.log("SouthWest",L.latLng(this.bounds[0][0][1], this.bounds[0][0][0])) 
        // console.log("NorthEast", L.latLng(this.bounds[0][2][1], this.bounds[0][2][0]))
        this.leafletMap.setView([this.bounds[0][0][1], this.bounds[0][0][0]]);
        // console.log("this.bounds[0]")
        console.log(this.bounds[0]);
        this.leafletMap.on('click', function (event) {
            if (_this.primed) {
                _this.primed = false;
            }
            else {
                return;
            }
            var markerOptions = {
                'draggable': true
            };
            var marker = L.marker(event.latlng, markerOptions);
            marker.addTo(_this.leafletMap);
        });
        //       let map = L.map('map', {
        //   center: new L.LatLng(40.731253, -73.996139),
        //   zoom: 12,
        // })
        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
            // attribution: 'Map data &copy; OpenStreetMap contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 19,
            id: 'your.mapbox.project.id',
            accessToken: 'pk.eyJ1IjoibmFub3R5cmFubnVzIiwiYSI6ImNpcnJtMmNubDBpZTN0N25rZmMxaHg4ZHQifQ.vj7pif8Z4BVhbYs55s1tAw'
        }).addTo(this.leafletMap);
    };
    LeafletMapComponent.prototype.gotoEvents = function () {
        this.router.navigate(['/event']);
    };
    LeafletMapComponent.prototype.primeDefaultMarker = function () {
        this.primed = true;
    };
    LeafletMapComponent.prototype.primeDirectionalMarker = function () { };
    LeafletMapComponent = __decorate([
        core_1.Component({
            selector: 'leaflet-component',
            templateUrl: '/app/map/leaflet-map.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, event_service_1.EventService])
    ], LeafletMapComponent);
    return LeafletMapComponent;
}());
exports.LeafletMapComponent = LeafletMapComponent;
//# sourceMappingURL=leaflet-map.component.js.map