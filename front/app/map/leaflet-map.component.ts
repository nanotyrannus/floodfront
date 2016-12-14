import { Component } from '@angular/core';
import { Router } from '@angular/router'
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
  constructor(private router: Router) { }
  ngOnInit() {
    this.leafletMap = L.map('map', {
      zoom: 12
    })
    this.leafletMap.setView([40.7, -73.9])
    this.leafletMap.on('click', event => {
      if (this.primed) {
        this.primed = false
      } else {
        return
      }
      let markerOptions = {
        'draggable' : true
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
    this.router.navigate(['/'])
  }
  private primeDefaultMarker(): void {
    this.primed = true
  }
  private primeDirectionalMarker(): void {}
}
