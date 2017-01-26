import { Component, EventEmitter, Output } from "@angular/core"
import { MarkerType } from "./marker.enum"

@Component({
    "selector" : "marker-menu",
    "templateUrl" : "/app/map/marker-menu.component.html",
    "styles" : [`
        .marker-menu-container-visible {
            background-color: white;
            z-index: 401;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0%;
            left: 0%;
            trasition: top 1s, left 1s;
        }
    `,`
        .marker-menu-container-hidden {
            background-color: white;
            z-index: 401;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 100%;
            left: 0%;
            trasition: top 1s, left 1s;
        }
    `]
})
export class MarkerMenuComponent {

    private isVisible: boolean = false
    private markerType = MarkerType
    private className: string = "marker-menu-container-hidden"
    @Output() onMarkerPicked = new EventEmitter<MarkerType>()
    
    /**
     * Open menu
     */
    public open() {
        this.className = "marker-menu-container-visible"
    }

    /**
     * Close menu
     */
    public close() {
        this.className = "marker-menu-container-hidden"
    }

    /**
     * Send choice to LeafletMapComponent
     * Close menu
     */
    public pickMarker(type: MarkerType):void {
        this.onMarkerPicked.emit(type)
        console.log(`Picked marker: ${type}`, type)
        this.close()
    }

}