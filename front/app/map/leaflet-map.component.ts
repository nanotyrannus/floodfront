import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { EventService } from '../event/event.service'
// import * as L from '/node_modules/leaflet/dist/leaflet.js'
let L: any = require('/node_modules/leaflet/dist/leaflet.js')
@Component({
  selector: 'leaflet-component',
  templateUrl: '/app/map/leaflet-map.component.html'
})
export class LeafletMapComponent {
  private leafletMap: any
  private primed: boolean = false
  private markers: any[]
  private eventName: string
  private eventId: number
  private bounds: any

  constructor(
    private router: Router,
    private eventService: EventService) { }
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


  }
  private gotoEvents(): void {
    this.router.navigate(['/event'])
  }
  private primeDefaultMarker(): void {
    this.primed = true
  }
  private primeDirectionalMarker(): void { }
}
