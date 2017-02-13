import { Component, ViewChild } from '@angular/core';
import { PopupComponent } from "./popup.component"
import { MarkerMenuComponent } from "./marker-menu.component"
import { MarkerNoteComponent } from "./marker-note.component"
import { Router } from '@angular/router'
import { EventService } from '../event/event.service'
import { RestService } from '../shared/rest.service'
import { UserService } from '../user/user.service'
import { NavigationService } from '../shared/navigation.service'
import { CookieService } from '../shared/cookie.service'
import { NgZone } from '@angular/core'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { MarkerType } from './marker.enum'

// import * as L from '/node_modules/leaflet/dist/leaflet.js'
// let L: any = require('/node_modules/leaflet/dist/leaflet.js')
declare var L: any

declare var $: any
@Component({
  selector: 'leaflet-component',
  templateUrl: 'leaflet-map.component.html'
})
export class LeafletMapComponent {
  public leafletMap: any
  public primed: boolean = false
  public markerTypeRef = MarkerType
  public markerType: MarkerType
  public markers: Marker[]
  public selectedMarker: any
  public files: Map<any, File> = new Map<any, File>()
  public eventName: string
  public eventId: number
  public bounds: any
  public awaitingLocation: boolean = true

  public deviceWidth: number
  public deviceHeight: number
  public sliderRadius: number
  public x: number
  public y: number
  public slider: any
  public sliderDisplay: string = "none"

  @ViewChild(PopupComponent)
  public popup: PopupComponent
  public clickX: number
  public clickY: number

  @ViewChild(MarkerMenuComponent)
  public markerMenu: MarkerMenuComponent

  @ViewChild(MarkerNoteComponent)
  public markerNote: MarkerNoteComponent

  constructor(
    public router: Router,
    public eventService: EventService,
    public userService: UserService,
    public rest: RestService,
    public nav: NavigationService,
    public cookie: CookieService,
    public zone: NgZone) { }
  ngOnInit() {
    window['leafletComponent'] = {
      "upload": (id) => this.upload(id),
      "openNote": () => {
        this.markerNote.open(this.selectedMarker.id)
      },
      "closeNote": () => {
        this.markerNote.close()
      },
      "readUrl": (val, id) => this.readUrl(val, id),
      "deleteMarker" : () => {
        this.deleteMarker(this.selectedMarker)
      }
    }
    try {
      this.deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      this.deviceHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      this.popup.setDimensions(this.deviceWidth, this.deviceHeight)

      // this.sliderRadius = Math.ceil(this.deviceWidth / 12)
      this.eventName = this.eventService.eventName
      this.eventId = this.eventService.eventId
      // this.bounds = this.eventService.bounds.coordinates
    } catch (err) {
      console.error(err)
      this.router.navigate(['/event'])
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

    console.log(`Getting markers for ${this.eventId}: ${this.eventName}`)
    // console.log(this.bounds)
    if (this.eventId == null) {
      console.warn(`eventId null, returning to /event`)
      this.router.navigate(['/event'])
    }
    this.leafletMap = L.map('map', {
      "zoom": 18,
      "center": [0, 0],
      "doubleClickZoom": false
    })
    // this.leafletMap.fitBounds(L.latLng(this.bounds[0][0][1], this.bounds[0][0][0]), L.latLng(this.bounds[0][2][1], this.bounds[0][2][0])) // Bottom left and top right corners of bbox
    // console.log("SouthWest",L.latLng(this.bounds[0][0][1], this.bounds[0][0][0])) 
    // console.log("NorthEast", L.latLng(this.bounds[0][2][1], this.bounds[0][2][0]))
    // this.leafletMap.setView([this.bounds[0][0][1], this.bounds[0][0][0]])
    this.initiateNavigation()

    // Change this to async
    // this.leafletMap.setView([this.nav.getCurrentPosition().lat, this.nav.getCurrentPosition().lon])

    // console.log("this.bounds[0]")
    // console.log(this.bounds[0])

    this.leafletMap.on("dragstart", event => {
      // this.sliderDisplay = "none"
      this.zone.run(() => {
        this.popup.hide()
        this.popup.isVisible = false
      })
      console.log("dragstart")
    })

    this.leafletMap.on('click', event => {

      // this.zone.run(() => {
      //   // console.log("Click event from zone")
      //   // this.popup.hide()
      //   // console.log(this.popup.getCoords())
      // })

      // this.sliderDisplay = "none"

      if (this.primed) {
        this.primed = false
      } else {
        return
      }


      this.spawnMarker(event.latlng)

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
      console.log(`placed marker at ${event.latlng.lat}, ${event.latlng.lng}`)

      // marker.addTo(this.leafletMap)
    })

    L.tileLayer('https://api.mapbox.com/styles/v1/nanotyrannus/ciye7ibx9000l2sk6v4n5bx3n/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
      // attribution: 'Map data &copy; OpenStreetMap contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 19,
      id: 'your.mapbox.project.id',
      accessToken: 'pk.eyJ1IjoibmFub3R5cmFubnVzIiwiYSI6ImNpcnJtMmNubDBpZTN0N25rZmMxaHg4ZHQifQ.vj7pif8Z4BVhbYs55s1tAw'
    }).addTo(this.leafletMap)

    this.getMarkers()
  }

  public gotoEvents(): void {
    // this.router.navigate(['/event'])
    /**
     * Demo only
     */
    this.userService.logout()
  }
  public primeDefaultMarker(): void {
    this.primed = true
    this.markerType = MarkerType.DEFAULT
  }
  public primeDirectionalMarker(): void {
    this.primed = true
    this.markerType = MarkerType.DIRECTIONAL
  }

  public getMarkers() {
    this.rest.post(`/marker/${this.eventId}/retrieve`, {
      "email": this.cookie.get("email")
    }).subscribe(data => {
      let body = data.json()
      body.markers.forEach(marker => {
        this.spawnMarker([marker.lat, marker.lon], marker.marker_type, marker)
      })
      console.log("get markers", body)

    }, error => { console.error(error) })
  }

  public showSlider(): void {
    // this.sliderDisplay = "block"
  }

  public hideSlider(): void {
    // this.sliderDisplay = "none"
  }

  /**
   * Create marker on server side.
   */
  public createMarker(lat: number, lon: number, marker: any = null, type: MarkerType = null) {
    let payload = {
      "type": type, //ignored on backend TODO: implementing type on backend
      "lat": lat,
      "lon": lon,
      "heading": (marker.heading != null) ? marker.heading : null,
      "accuracy": this.nav.currentPosition.accuracy || -1,
      "email": this.cookie.get("email")
    }
    console.log("createMarker payload", payload)
    this.rest.post(`/marker/${this.eventId}`, payload).subscribe(
      data => {
        let body = data.json()
        // marker.id = body.id
        marker.idSubject.next(body.id)
      },
      error => {
        console.error(error)
      })
  }

  // Spawn client-side marker
  // Refactoring to handle server and client-side markers
  // Don't need to pass markertype since available in scope
  // bindPopup can be merged into this method
  public spawnMarker(latlng: any, type: MarkerType = null, oldMarker: any = null) {
    console.log(`spawnMarker called with ${latlng}`)
    let marker = L.marker(latlng, { "draggable": true, "rotationOrigin": "center" })

    var delay = 250
    marker.clickCount = 0
    marker.on('click', event => {

      // Implement double click
      // console.log("Marker clicked", event)
      this.selectedMarker = marker
      // this.popup.setMarker(this.selectedMarker)
      marker.clickCount += 1
      if (marker.clickCount === 2) {
        console.log("Double click detected.")
        // this.sliderDisplay = "block"
        // this.x = (event.originalEvent.clientX - this.sliderRadius - 20)
        // this.y = (event.originalEvent.clientY - this.sliderRadius - 20)

      }
      setTimeout(() => {
        if (marker.clickCount === 1) {
          console.log("Single click detected")
        }
        marker.clickCount = 0
      }, delay)

      setTimeout(() => {
        // Wait one tick for popup to render
        $(":file").filestyle({
          iconName: "glyphicon glyphicon-camera",
          input: false,
          buttonText: "Photo"
        })
        $("div.bootstrap-filestyle.input-group").css("width", "100%")
        $("label.btn.btn-default").css("width", "100%")
      }, 0)
    })
    marker.on("contextmenu", event => {
      console.log(`contextmenu event from ${marker.id}`, event)
      this.selectedMarker = marker
      event.originalEvent.preventDefault()
      this.deleteMarker(marker)

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
    })

    if (oldMarker) { // Markers from server are not typed
      marker.id = oldMarker.id
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
      console.log(`Marker of id ${oldMarker.id} retrieved of type ${oldMarker.marker_type}`)
    } else {
      // Newly created marker
      marker.marker_type = MarkerType[this.markerType]
      if (marker.marker_type === MarkerType.DIRECTIONAL) {
        marker.heading = 0
        marker.setIcon(
          L.icon({
            "iconUrl": "assets/images/arrow.svg",
            "iconSize": [40, 40]
          })
        )
        // After rotation plugin install, set rotation here
      }
      marker.idSubject = new ReplaySubject(1)
      marker.idSubject.subscribe(id => {
        marker.id = id
        this.bindPopup(marker)
      })
      this.createMarker(latlng.lat, latlng.lng, marker, marker.marker_type)
    }

    let referenceMarker = (oldMarker) ? oldMarker : marker

    if (referenceMarker.marker_type === MarkerType[MarkerType.WALKABLE]) {
      marker.setIcon(
        L.icon({
          "iconUrl": "assets/images/marker_walkable.svg",
          "iconSize": [25, 25]
        })
      )
    } else if (referenceMarker.marker_type === MarkerType[MarkerType.BORDER]) {
      marker.setIcon(
        L.icon({
          "iconUrl": "assets/images/marker_border.svg",
          "iconSize": [25, 25]
        })
      )
    } else if (referenceMarker.marker_type === MarkerType[MarkerType.FLOOD]) {
      marker.setIcon(
        L.icon({
          "iconUrl": "assets/images/marker_flood.svg",
          "iconSize": [25, 25]
        })
      )
    } else {
      console.warn(`Marker type: ${referenceMarker.marker_type}`)
    }

    marker.on('dragend', e => {
      this.updateMarker(marker.id, e.target._latlng)
    })

    this.bindPopup(marker)
    marker.addTo(this.leafletMap)
  }

  public bindPopup(marker: any, type: MarkerType = MarkerType.DEFAULT) {
    console.log(`from bindPopup: ${marker.id}`)
    marker.unbindPopup()
    let id = marker.id
    let markup = `
        <img id="thumbnail-${marker.id}" class="thumbnail map-thumbnail" src="/uploads/${marker.id}.jpg">
        <form enctype="multipart/form-data" action="https://localhost:8080/upload" method="POST">
        <input style="display: inline;" class="filestyle" data-iconName="glyphicon glyphicon-camera" type="file" name="picture" accept="image/*" onchange="window.leafletComponent.readUrl(this, ${marker.id})">
        </form>
        <button class="btn btn-default context-btn" onclick="window.leafletComponent.openNote()">Note</button>
        <button class="btn btn-default context-btn" onclick="window.leafletComponent.deleteMarker()">Delete</button>
        <!-- <button class="btn btn-default" onclick="window.leafletComponent.upload(${marker.id})">UPLOAD</button> -->
    `
    // if (marker.type === MarkerType.DIRECTIONAL) {
    //   markup += `<div>I'M DIRECTIONAL</div>`
    // }
    marker.bindPopup(markup, { "autoPan": false })
  }

  public readUrl(value: any, markerId: number) {
    console.log(value)
    var elm = document.getElementById(`thumbnail-${markerId}`)
    var reader = new FileReader() //
    reader.onload = e => {
      elm['src'] = e.target['result']
    }
    reader.readAsDataURL(value.files[0])
    this.files.set(markerId, value.files[0])
    this.upload(markerId)
  }

  public updateMarker(id: number, latlng: any, heading: number = null) {
    console.log(`updateMarker called with ${id} ${heading}`, latlng)
    this.rest.post(`/marker/${id}/update`, {
      "lat": latlng.lat,
      "lon": latlng.lng,
      "heading": heading
    }).subscribe(data => {
      console.log(`marker update`, data)
    }, error => { console.error(error) })
  }


  public initiateNavigation() {
    // Turn this into one-time execution using AsyncSubject
    this.nav.getCurrentPosition().subscribe(pos => {
      if (this.awaitingLocation) {
        this.leafletMap.setView([pos.lat, pos.lon])
        this.awaitingLocation = false
      }
    })

  }

  public centerMap() {
    if (this.nav.currentPosition) {
      this.leafletMap.setView(this.nav.currentPosition)
    } else {
      this.awaitingLocation = true
    }
  }

  public primeMarker(type: MarkerType) {
    this.markerType = type
    this.primed = true
  }

  public markerPlaced() {
    this.markerType = null
    this.primed = false
  }

  public deleteMarker(marker: any) {
    let res = window.confirm("Delete marker?")
    if (res) {
      this.leafletMap.removeLayer(marker)
      this.rest.post(`/marker/${marker.id}/delete`, {}).subscribe(
        data => {
          console.log(data.json())
        }
      )
    }
  }

  public toggleInfo() {
    this.markerMenu.toggle()
  }

  public onMarkerPicked(type: MarkerType) {
    this.primeMarker(type)
  }

  upload(markerId: number) {
    let formData = new FormData()
    formData.append("image", this.files.get(markerId))
    formData.append("marker_id", markerId)
    let xhr = new XMLHttpRequest()
    xhr.open("POST", `${window.location.protocol}//${window.location.hostname}:8080/upload`)
    xhr.send(formData)
    xhr.addEventListener("loadend", () => {
      this.selectedMarker.closePopup()
    })
  }
}

class Marker {
  lat: number
  lon: number
  type: string
  heading: number
  id: number
}

