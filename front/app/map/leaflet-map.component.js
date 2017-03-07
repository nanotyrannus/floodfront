var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { PopupComponent } from "./popup.component";
import { MarkerMenuComponent } from "./marker-menu.component";
import { MarkerNoteComponent } from "./marker-note.component";
import { Router } from '@angular/router';
import { EventService } from '../event/event.service';
import { RestService } from '../shared/rest.service';
import { UserService } from '../user/user.service';
import { NavigationService } from '../shared/navigation.service';
import { CookieService } from '../shared/cookie.service';
import { NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { MarkerType } from './marker.enum';
var LeafletMapComponent = (function () {
    function LeafletMapComponent(router, eventService, userService, rest, nav, cookie, zone) {
        this.router = router;
        this.eventService = eventService;
        this.userService = userService;
        this.rest = rest;
        this.nav = nav;
        this.cookie = cookie;
        this.zone = zone;
        this.primed = false;
        this.markerTypeRef = MarkerType;
        this.files = new Map();
        this.awaitingLocation = true;
        this.sliderDisplay = "none";
    }
    LeafletMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        window['leafletComponent'] = {
            "upload": function (id) { return _this.upload(id); },
            "openNote": function () {
                _this.markerNote.open(_this.selectedMarker.id);
            },
            "closeNote": function () {
                _this.markerNote.close();
            },
            "readUrl": function (val, id) { return _this.readUrl(val, id); },
            "deleteMarker": function () {
                _this.deleteMarker(_this.selectedMarker);
            }
        };
        try {
            this.deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            this.deviceHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            this.popup.setDimensions(this.deviceWidth, this.deviceHeight);
            // this.sliderRadius = Math.ceil(this.deviceWidth / 12)
            this.eventName = this.eventService.eventName;
            this.eventId = this.eventService.eventId;
        }
        catch (err) {
            console.error(err);
            this.router.navigate(['/event']);
        }
        // this.slider = $("#slider").CircularSlider({
        //   "min": 0,
        //   "max": 359,
        //   "value": 0,
        //   "radius": this.sliderRadius,
        //   "onSlideEnd": (ui, val) => {
        //     let marker = this.selectedMarker
        //     console.log(val)
        //     marker.setRotationAngle(val)
        //     marker.heading = val
        //     // On end, update
        //     this.updateMarker(marker.id, marker.getLatLng(), val)
        //   },
        //   "slide": (ui, val) => {
        //     if (!this.selectedMarker) {
        //       return
        //     } else {
        //       this.selectedMarker.setRotationAngle(val)
        //     }
        //   },
        //   "animate": false
        // })
        console.log("Getting markers for " + this.eventId + ": " + this.eventName);
        // console.log(this.bounds)
        if (this.eventId == null) {
            console.warn("eventId null, returning to /event");
            this.router.navigate(['/event']);
        }
        this.leafletMap = L.map('map', {
            "zoom": 18,
            "center": [0, 0],
            "doubleClickZoom": false
        });
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161007aOblique/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161008aOblique/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161008bOblique/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161009aOblique/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161010aOblique/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161011_RGB/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161013_RGB/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161014_RGB/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161015_RGB/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        new L.tileLayer("https://geodesy.noaa.gov/storm_archive/storms/tilesb/services/tileserver.php/20161016_RGB/{z}/{x}/{y}.png", { tileSize: 256, minZoom: 1, maxZoom: 19, type: 'xyz', errorTileUrl: 'https://storms.ngs.noaa.gov/storms/matthew/images/clear.png' }).addTo(this.leafletMap).bringToFront();
        // this.leafletMap.fitBounds(L.latLng(this.bounds[0][0][1], this.bounds[0][0][0]), L.latLng(this.bounds[0][2][1], this.bounds[0][2][0])) // Bottom left and top right corners of bbox
        // console.log("SouthWest",L.latLng(this.bounds[0][0][1], this.bounds[0][0][0])) 
        // console.log("NorthEast", L.latLng(this.bounds[0][2][1], this.bounds[0][2][0]))
        // this.leafletMap.setView([this.bounds[0][0][1], this.bounds[0][0][0]])
        this.initiateNavigation();
        // Change this to async
        // this.leafletMap.setView([this.nav.getCurrentPosition().lat, this.nav.getCurrentPosition().lon])
        // console.log("this.bounds[0]")
        // console.log(this.bounds[0])
        this.leafletMap.on("dragstart", function (event) {
            // this.sliderDisplay = "none"
            _this.zone.run(function () {
                _this.popup.hide();
                _this.popup.isVisible = false;
            });
            console.log("dragstart");
        });
        this.leafletMap.on('click', function (event) {
            // this.zone.run(() => {
            //   // console.log("Click event from zone")
            //   // this.popup.hide()
            //   // console.log(this.popup.getCoords())
            // })
            // this.sliderDisplay = "none"
            if (_this.primed) {
                _this.primed = false;
            }
            else {
                return;
            }
            _this.spawnMarker(event.latlng);
            // let markerOptions = {
            //   'draggable': true
            // }
            // let marker = L.marker(event.latlng, markerOptions)
            // marker.type = this.markerType
            // if (marker.type === MarkerType.DIRECTIONAL) {
            //   marker.heading = 0
            // }
            // marker.on('drag', event => { })
            // marker.on('dragend', event => {
            //   console.log(`dragend:`, event.target._latlng)
            //   this.updateMarker(marker.id, event.target._latlng)
            // })
            // this.bindPopup(marker)
            console.log("placed marker at " + event.latlng.lat + ", " + event.latlng.lng);
            // marker.addTo(this.leafletMap)
        });
        L.tileLayer('https://api.mapbox.com/styles/v1/nanotyrannus/ciye7ibx9000l2sk6v4n5bx3n/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
            // attribution: 'Map data &copy; OpenStreetMap contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 19,
            id: 'your.mapbox.project.id',
            accessToken: 'pk.eyJ1IjoibmFub3R5cmFubnVzIiwiYSI6ImNpcnJtMmNubDBpZTN0N25rZmMxaHg4ZHQifQ.vj7pif8Z4BVhbYs55s1tAw'
        }).addTo(this.leafletMap);
        this.getMarkers();
    };
    LeafletMapComponent.prototype.gotoEvents = function () {
        // this.router.navigate(['/event'])
        /**
         * Demo only
         */
        this.userService.logout();
    };
    LeafletMapComponent.prototype.primeDefaultMarker = function () {
        this.primed = true;
        this.markerType = MarkerType.DEFAULT;
    };
    LeafletMapComponent.prototype.primeDirectionalMarker = function () {
        this.primed = true;
        this.markerType = MarkerType.DIRECTIONAL;
    };
    LeafletMapComponent.prototype.getMarkers = function () {
        var _this = this;
        this.rest.post("/marker/" + this.eventId + "/retrieve", {
            "email": this.cookie.get("email")
        }).subscribe(function (data) {
            var body = data.json();
            body.markers.forEach(function (marker) {
                _this.spawnMarker([marker.lat, marker.lon], marker.marker_type, marker);
            });
            console.log("get markers", body);
        }, function (error) { console.error(error); });
    };
    LeafletMapComponent.prototype.showSlider = function () {
        // this.sliderDisplay = "block"
    };
    LeafletMapComponent.prototype.hideSlider = function () {
        // this.sliderDisplay = "none"
    };
    /**
     * Create marker on server side.
     */
    LeafletMapComponent.prototype.createMarker = function (lat, lon, marker, type) {
        if (marker === void 0) { marker = null; }
        if (type === void 0) { type = null; }
        var payload = {
            "type": type,
            "lat": lat,
            "lon": lon,
            "heading": (marker.heading != null) ? marker.heading : null,
            "accuracy": this.nav.currentPosition.accuracy || -1,
            "email": this.cookie.get("email")
        };
        console.log("createMarker payload", payload);
        this.rest.post("/marker/" + this.eventId, payload).subscribe(function (data) {
            var body = data.json();
            // marker.id = body.id
            marker.idSubject.next(body.id);
        }, function (error) {
            console.error(error);
        });
    };
    // Spawn client-side marker
    // Refactoring to handle server and client-side markers
    // Don't need to pass markertype since available in scope
    // bindPopup can be merged into this method
    LeafletMapComponent.prototype.spawnMarker = function (latlng, type, oldMarker) {
        var _this = this;
        if (type === void 0) { type = null; }
        if (oldMarker === void 0) { oldMarker = null; }
        console.log("spawnMarker called with " + latlng);
        var marker = L.marker(latlng, { "draggable": true, "rotationOrigin": "center" });
        var delay = 250;
        marker.clickCount = 0;
        marker.on('click', function (event) {
            // Implement double click
            // console.log("Marker clicked", event)
            _this.selectedMarker = marker;
            // this.popup.setMarker(this.selectedMarker)
            marker.clickCount += 1;
            if (marker.clickCount === 2) {
                console.log("Double click detected.");
            }
            setTimeout(function () {
                if (marker.clickCount === 1) {
                    console.log("Single click detected");
                }
                marker.clickCount = 0;
            }, delay);
            setTimeout(function () {
                // Wait one tick for popup to render
                $(":file").filestyle({
                    iconName: "glyphicon glyphicon-camera",
                    input: false,
                    buttonText: "Photo"
                });
                $("div.bootstrap-filestyle.input-group").css("width", "100%");
                $("label.btn.btn-default").css("width", "100%");
            }, 0);
        });
        marker.on("contextmenu", function (event) {
            console.log("contextmenu event from " + marker.id, event);
            _this.selectedMarker = marker;
            event.originalEvent.preventDefault();
            _this.deleteMarker(marker);
            // this.selectedMarker = marker
            // this.popup.setMarker(this.selectedMarker)
            // this.sliderDisplay = "block"
            // this.x = (event.originalEvent.clientX - this.sliderRadius - 20)
            // this.y = (event.originalEvent.clientY - this.sliderRadius - 20)
            // this.zone.run(() => {
            //   this.popup.setCoords(event.originalEvent.clientX, event.originalEvent.clientY)
            //   this.popup.show()
            // })
            // return false
        });
        if (oldMarker) {
            marker.id = oldMarker.id;
            // if (oldMarker.heading !== null) {
            //   marker.type = MarkerType.DIRECTIONAL
            //   marker.setIcon(
            //     L.icon({
            //       "iconUrl": "assets/images/arrow.svg",
            //       "iconSize": [40, 40]
            //     })
            //   )
            //   marker.heading = oldMarker.heading
            //   marker.setRotationAngle(marker.heading)
            // } else {
            //   marker.type = MarkerType.DEFAULT
            // }
            console.log("Marker of id " + oldMarker.id + " retrieved of type " + oldMarker.marker_type);
        }
        else {
            // Newly created marker
            marker.marker_type = MarkerType[this.markerType];
            if (marker.marker_type === MarkerType.DIRECTIONAL) {
                marker.heading = 0;
                marker.setIcon(L.icon({
                    "iconUrl": "assets/images/arrow.svg",
                    "iconSize": [40, 40]
                }));
            }
            marker.idSubject = new ReplaySubject(1);
            marker.idSubject.subscribe(function (id) {
                marker.id = id;
                _this.bindPopup(marker);
            });
            this.createMarker(latlng.lat, latlng.lng, marker, marker.marker_type);
        }
        var referenceMarker = (oldMarker) ? oldMarker : marker;
        if (referenceMarker.marker_type === MarkerType[MarkerType.WALKABLE]) {
            marker.setIcon(L.icon({
                "iconUrl": "assets/images/marker_walkable.svg",
                "iconSize": [25, 25]
            }));
        }
        else if (referenceMarker.marker_type === MarkerType[MarkerType.BORDER]) {
            marker.setIcon(L.icon({
                "iconUrl": "assets/images/marker_border.svg",
                "iconSize": [25, 25]
            }));
        }
        else if (referenceMarker.marker_type === MarkerType[MarkerType.FLOOD]) {
            marker.setIcon(L.icon({
                "iconUrl": "assets/images/marker_flood.svg",
                "iconSize": [25, 25]
            }));
        }
        else {
            console.warn("Marker type: " + referenceMarker.marker_type);
        }
        marker.on('dragend', function (e) {
            _this.updateMarker(marker.id, e.target._latlng);
        });
        this.bindPopup(marker);
        marker.addTo(this.leafletMap);
    };
    LeafletMapComponent.prototype.bindPopup = function (marker, type) {
        if (type === void 0) { type = MarkerType.DEFAULT; }
        console.log("from bindPopup: " + marker.id);
        marker.unbindPopup();
        var id = marker.id;
        var markup = "\n        <img id=\"thumbnail-" + marker.id + "\" class=\"thumbnail map-thumbnail\" src=\"/uploads/" + marker.id + ".jpg\">\n        <form enctype=\"multipart/form-data\" action=\"https://localhost:8080/upload\" method=\"POST\">\n        <input style=\"display: inline;\" class=\"filestyle\" data-iconName=\"glyphicon glyphicon-camera\" type=\"file\" name=\"picture\" accept=\"image/*\" onchange=\"window.leafletComponent.readUrl(this, " + marker.id + ")\">\n        </form>\n        <button class=\"btn btn-default context-btn\" onclick=\"window.leafletComponent.openNote()\">Note</button>\n        <button class=\"btn btn-default context-btn\" onclick=\"window.leafletComponent.deleteMarker()\">Delete</button>\n        <!-- <button class=\"btn btn-default\" onclick=\"window.leafletComponent.upload(" + marker.id + ")\">UPLOAD</button> -->\n    ";
        // if (marker.type === MarkerType.DIRECTIONAL) {
        //   markup += `<div>I'M DIRECTIONAL</div>`
        // }
        marker.bindPopup(markup, { "autoPan": false });
    };
    LeafletMapComponent.prototype.readUrl = function (value, markerId) {
        console.log(value);
        var elm = document.getElementById("thumbnail-" + markerId);
        var reader = new FileReader(); //
        reader.onload = function (e) {
            elm['src'] = e.target['result'];
        };
        reader.readAsDataURL(value.files[0]);
        this.files.set(markerId, value.files[0]);
        this.upload(markerId);
    };
    LeafletMapComponent.prototype.updateMarker = function (id, latlng, heading) {
        if (heading === void 0) { heading = null; }
        console.log("updateMarker called with " + id + " " + heading, latlng);
        this.rest.post("/marker/" + id + "/update", {
            "lat": latlng.lat,
            "lon": latlng.lng,
            "heading": heading
        }).subscribe(function (data) {
            console.log("marker update", data);
        }, function (error) { console.error(error); });
    };
    LeafletMapComponent.prototype.initiateNavigation = function () {
        var _this = this;
        // Turn this into one-time execution using AsyncSubject
        this.nav.getCurrentPosition().subscribe(function (pos) {
            if (_this.awaitingLocation) {
                _this.leafletMap.setView([pos.lat, pos.lon]);
                _this.awaitingLocation = false;
            }
        });
    };
    LeafletMapComponent.prototype.centerMap = function () {
        if (this.nav.currentPosition) {
            this.leafletMap.setView(this.nav.currentPosition);
        }
        else {
            this.awaitingLocation = true;
        }
    };
    LeafletMapComponent.prototype.primeMarker = function (type) {
        this.markerType = type;
        this.primed = true;
    };
    LeafletMapComponent.prototype.markerPlaced = function () {
        this.markerType = null;
        this.primed = false;
    };
    LeafletMapComponent.prototype.deleteMarker = function (marker) {
        var res = window.confirm("Delete marker?");
        if (res) {
            this.leafletMap.removeLayer(marker);
            this.rest.post("/marker/" + marker.id + "/delete", {}).subscribe(function (data) {
                console.log(data.json());
            });
        }
    };
    LeafletMapComponent.prototype.toggleInfo = function () {
        this.markerMenu.toggle();
    };
    LeafletMapComponent.prototype.onMarkerPicked = function (type) {
        this.primeMarker(type);
    };
    LeafletMapComponent.prototype.upload = function (markerId) {
        var _this = this;
        var formData = new FormData();
        formData.append("image", this.files.get(markerId));
        formData.append("marker_id", markerId);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", window.location.protocol + "//" + window.location.hostname + ":8080/upload");
        xhr.send(formData);
        xhr.addEventListener("loadend", function () {
            _this.selectedMarker.closePopup();
        });
    };
    return LeafletMapComponent;
}());
__decorate([
    ViewChild(PopupComponent),
    __metadata("design:type", PopupComponent)
], LeafletMapComponent.prototype, "popup", void 0);
__decorate([
    ViewChild(MarkerMenuComponent),
    __metadata("design:type", MarkerMenuComponent)
], LeafletMapComponent.prototype, "markerMenu", void 0);
__decorate([
    ViewChild(MarkerNoteComponent),
    __metadata("design:type", MarkerNoteComponent)
], LeafletMapComponent.prototype, "markerNote", void 0);
LeafletMapComponent = __decorate([
    Component({
        selector: 'leaflet-component',
        templateUrl: 'leaflet-map.component.html'
    }),
    __metadata("design:paramtypes", [Router,
        EventService,
        UserService,
        RestService,
        NavigationService,
        CookieService,
        NgZone])
], LeafletMapComponent);
export { LeafletMapComponent };
var Marker = (function () {
    function Marker() {
    }
    return Marker;
}());
//# sourceMappingURL=leaflet-map.component.js.map