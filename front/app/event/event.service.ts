import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"
import { RestService } from "../shared/rest.service"

@Injectable()
export class EventService {
    private _eventId: number
    private events: any

    constructor(private rest: RestService) {}

    getEvents(): Observable<any> {
        return this.rest.get("/event")
    }

    set eventId (value: number) {
        this._eventId = value
    }

    get eventId (): number {
        return this._eventId
    }

    createEvent(name: string, desc: string, bounds: Bounds) {
        console.log(`EventService#createEvent() called`)
        this.rest.post("/event", {"name" : name, "description" : desc, "bounds" : bounds}).subscribe(
            data => {
                console.log(data)
            }, 
            error => {
                console.error(error)
            }
        )
    }
}

class Bounds {
    minLat: number
    minLon: number
    maxLat: number
    maxLon: number
}