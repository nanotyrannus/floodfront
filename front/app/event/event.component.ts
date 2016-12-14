import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './event.service'
import { RestService } from '../shared/rest.service'
import { EnvironmentService } from '../shared/environment.service'

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

    constructor(
        private env: EnvironmentService,
        private rest: RestService,
        private eventService: EventService,
        private router: Router) {

    }

    ngOnInit() {
        console.log(`Base URL : ${ this.env.baseUrl }`)
        // this.rest.post("/ping", {"hey" : 1}).subscribe(data => {
        //   console.log(data.json())
        // }, error => {
        //   console.error(error)
        // })
        this.getEvents()
    }

    getEvents() {
      this.eventService.getEvents().subscribe(
        data => {
          let events = data.json()
          this.events = events
          console.log(events)
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
}
