import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { EventService } from "../event/event.service"

@Component({
    "templateUrl": "mode.component.html",
    "selector": "mode-selector",
    "styleUrls": ["mode.component.css"]
})
export class ModeComponent {

    constructor(private eventService: EventService, private router: Router) { }

    enterMap(mode: string) {
        console.log(`ModeComponent#enterMap(${ mode })`)
        this.eventService.mode = mode
        this.eventService.eventId = 2
        this.router.navigate(['/map'])
    }
}