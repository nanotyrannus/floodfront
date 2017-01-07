import { Injectable } from "@angular/core"

@Injectable()
export class NavigationService {

    private currentPosition: any = null
    private watchId: number

    public constructor() {
        this.track()
    }

    public track() {
        this.watchId = window.navigator.geolocation.watchPosition( pos => {
            this.currentPosition = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            }
        })
    }

    public getCurrentPosition() {
        console.log(this.currentPosition)
        return this.currentPosition
    }
}