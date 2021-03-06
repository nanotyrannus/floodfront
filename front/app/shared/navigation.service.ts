import { Injectable } from "@angular/core"
import { ReplaySubject } from "rxjs/ReplaySubject"

@Injectable()
export class NavigationService {

    private currentPositionSubject: ReplaySubject<any>
    private _currentPosition: any
    private watchId: number

    public constructor() {
        this._currentPosition = null
        this.currentPositionSubject = new ReplaySubject<any>(1)
        this.track()
    }

    public track() {
        this.watchId = window.navigator.geolocation.watchPosition( pos => {
            this.currentPositionSubject.next({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                accuracy: pos.coords.accuracy
            })
        })
        this.currentPositionSubject.subscribe( pos => {
            this._currentPosition = pos
        })
    }

    public getCurrentPosition(): ReplaySubject<any> {
        return this.currentPositionSubject
    }

    get currentPosition(): any {
        return this._currentPosition
    }

}