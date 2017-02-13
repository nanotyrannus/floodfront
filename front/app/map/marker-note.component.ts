import { Component } from "@angular/core"
import { RestService } from "../shared/rest.service"

@Component({
    "selector" : "marker-note",
    "templateUrl" : "marker-note.component.html"
})
export class MarkerNoteComponent {

    public markerId: number
    public display: string
    public description: string

    constructor(public rest: RestService) {
        this.display = "none"
    }

    public open(markerId: number) {
        this.markerId = markerId
        this.display = "block"
    }

    public submit() {
        console.log(this.markerId)
        this.rest.post(`/marker/${ this.markerId }/description`, {
            "description" : this.description
        }).subscribe(data => {
            console.log(data)
            this.close()
        }, err => {
            alert("Error submitting description")
            this.close()
        })
    }

    public close() {
        this.display = "none"
        this.description = ""
    }

}