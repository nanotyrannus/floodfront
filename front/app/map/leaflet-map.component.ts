import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { EventService } from '../event/event.service'
import { RestService } from '../shared/rest.service'
import { UserService } from '../user/user.service'
// import * as L from '/node_modules/leaflet/dist/leaflet.js'
let L: any = require('/node_modules/leaflet/dist/leaflet.js')
@Component({
  selector: 'leaflet-component',
  templateUrl: '/app/map/leaflet-map.component.html'
})
export class LeafletMapComponent {
  private leafletMap: any
  private primed: boolean = false
  private markers: Marker[]
  private eventName: string
  private eventId: number
  private bounds: any

  constructor(
    private router: Router,
    private eventService: EventService,
    private userService: UserService,
    private rest: RestService) { }
  ngOnInit() {
    this.eventName = this.eventService.eventName
    this.eventId = this.eventService.eventId
    this.bounds = this.eventService.bounds.coordinates
    console.log(`Getting markers for ${this.eventId}: ${this.eventName}`)
    console.log(this.bounds)
    if (this.eventId == null) {
      console.warn(`eventId null, returning to /event`)
      this.router.navigate(['/event'])
    }
    this.leafletMap = L.map('map', {
      zoom: 12
    })
    // this.leafletMap.fitBounds(L.latLng(this.bounds[0][0][1], this.bounds[0][0][0]), L.latLng(this.bounds[0][2][1], this.bounds[0][2][0])) // Bottom left and top right corners of bbox
    // console.log("SouthWest",L.latLng(this.bounds[0][0][1], this.bounds[0][0][0])) 
    // console.log("NorthEast", L.latLng(this.bounds[0][2][1], this.bounds[0][2][0]))
    this.leafletMap.setView([this.bounds[0][0][1], this.bounds[0][0][0]])
    // console.log("this.bounds[0]")
    console.log(this.bounds[0])
    this.leafletMap.on('click', event => {
      if (this.primed) {
        this.primed = false
      } else {
        return
      }
      let markerOptions = {
        'draggable': true
      }
      let marker = L.marker(event.latlng, markerOptions)
      marker.on('drag', event => {

      })
      marker.on('dragend', event => {
        console.log(`dragend:`, event.target._latlng)
        this.updateMarker(marker.id, event.target._latlng)
      })
      console.log(`placed marker at ${event.latlng.lat}, ${event.latlng.lng}`)
      this.createMarker("point", event.latlng.lat, event.latlng.lng, null, marker)
      
      marker.addTo(this.leafletMap)
    })
    //       let map = L.map('map', {
    //   center: new L.LatLng(40.731253, -73.996139),
    //   zoom: 12,
    // })

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
      // attribution: 'Map data &copy; OpenStreetMap contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 19,
      id: 'your.mapbox.project.id',
      accessToken: 'pk.eyJ1IjoibmFub3R5cmFubnVzIiwiYSI6ImNpcnJtMmNubDBpZTN0N25rZmMxaHg4ZHQifQ.vj7pif8Z4BVhbYs55s1tAw'
    }).addTo(this.leafletMap)


    this.getMarkers()
  }
  private gotoEvents(): void {
    this.router.navigate(['/event'])
  }
  private primeDefaultMarker(): void {
    this.primed = true
  }
  private primeDirectionalMarker(): void { }

  private getMarkers() {
    this.rest.post(`/marker/${ this.eventId }/retrieve`, {
      "email" : this.userService.email
    }).subscribe(data => {
      let body = data.json()
      body.markers.forEach(marker => {
        this.spawnMarker([marker.lat, marker.lon], null, marker)
      })
      console.log("get markers", body)

    }, error => {console.error(error)})
  }

  private createMarker(type: string, lat: number, lon: number, heading: number = null, marker: any=null) {
    this.rest.post(`/marker/${ this.eventId }`, {
      "type" : type,
      "lat" : lat,
      "lon" : lon,
      "heading" : heading,
      "email" : this.userService.email
    }).subscribe(
      data => {
        let body = data.json()
        console.log()
        marker.id = body.id
      },
      error => {
        console.error(error)
      }
    )
  }

  private spawnMarker(latlng: any, type: string = null, oldMarker: any = null) { // Spawn client-side marker
    let marker = L.marker(latlng, { "draggable" : true })
    if (oldMarker) {
      marker.id = oldMarker.id
      marker.bindPopup(`<img class="thumbnail map-thumbnail" src="/assets/images/placeholder${Math.floor(Math.random()*100)%4}.jpg"><form enctype="multipart/form-data" action="http://localhost:8080/upload" method="POST"><input type="file" name="picture" accept="image/*"><input type="submit">`)
    }
    marker.on('dragend', e => {
      this.updateMarker(marker.id, e.target._latlng)
    })

    marker.addTo(this.leafletMap)
  }

  private updateMarker(id: number, latlng: any) {
    this.rest.post(`/marker/${ id }/update`, {
      "lat" : latlng.lat,
      "lon" : latlng.lng
    }).subscribe(data => {
      console.log(`marker update`, data)
    }, error => { console.error(error) })
  }
}

class Marker {
  lat: number
  lon: number
  type: string
  heading: number
  id: number
}