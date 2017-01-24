import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './event.service'
import { RestService } from '../shared/rest.service'
import { EnvironmentService } from '../shared/environment.service'
import { NavigationService } from '../shared/navigation.service'

@Component({
  selector: 'event-component',
  templateUrl : '/app/event/event.component.html'
})
export class EventComponent { 

    events: any
    eventName: string
    description: string
    minLat: number
    minLon: number
    maxLat: number
    maxLon: number

    dataUrl: any
    file: any

    constructor(
        private env: EnvironmentService,
        private rest: RestService,
        private eventService: EventService,
        private router: Router,
        private nav: NavigationService) {

    }

    ngOnInit() {
        console.log(`Base URL : ${ this.env.baseUrl }`)
        // this.rest.post("/ping", {"hey" : 1}).subscribe(data => {
        //   console.log(data.json())
        // }, error => {
        //   console.error(error)
        // })
        this.getEvents()
        this.nav.track()
    }

    getEvents() {
      this.eventService.getEvents().subscribe(
        data => {
          let events = data.json()
          this.events = events
          console.log(events)
          /**
           * Only for demo
           */
          let event = this.events[0]
          this.enterEvent(event.id, event.name, event.bounds)
        }, error => {
          console.error(error)
        }
      )
    }

    enterEvent(eventId: number, eventName: string, bounds: any) {
      console.log(`enterEvent: ${eventId}: ${eventName}`)
        this.eventService.eventId = eventId
        this.eventService.eventName = eventName
        this.eventService.bounds = JSON.parse(bounds)
        this.router.navigate(['/map'])
    }

    createEvent() {
      console.log("create event clicked")
        this.eventService.createEvent(this.eventName, this.description, { 
          "minLon" : this.minLon,
          "minLat" : this.minLat,
          "maxLat" : this.maxLat,
          "maxLon" : this.maxLon
        })
    }

    createEventButtonState() {
      return !(this.description && this.eventName && this.maxLat && this.maxLon && this.minLat && this.minLon)
    }
    
    /**Test
     * 
     */

    uploadImage() {
      if (!this.file) return
      console.log(this.file)
      let formData = new FormData()
      formData.append("image", this.file)
      formData.append("foo", "bar")
      let xhr = new XMLHttpRequest()
      xhr.open("POST", `${window.location.protocol}//${window.location.hostname}:8080/upload`)
      xhr.send(formData)
    }

    readUrl(value: any) {
      let test = document.getElementById("test")
      var reader = new FileReader()
      reader.onload = e => {
        test['src'] = e.target['result']
        this.dataUrl = test['src']
      }
      reader.readAsDataURL(value.target.files[0])
      this.file = value.target.files[0]
      console.log(`readURL called`)
      console.log(value)
    }
}
