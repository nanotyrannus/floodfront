import { Component, Input, ElementRef } from "@angular/core"

@Component({
    "templateUrl" : "popup.component.html",
    "selector" : "popup",
    "styles" : [`
        .popup { 
            position: fixed; 
            background-color: white;
            z-index: 402;
            top: 0;
            left: 0;    
        }
    `]
})
export class PopupComponent {
    public isVisible: boolean = false
    @Input() public x: number
    @Input() public y: number
    public width: number
    public height: number
    public marker: any

    constructor(private ref: ElementRef) {

    }

    public display(): string {
        if (this.isVisible) {
            return "visible"
        } else {
            return "hidden"
        }
    }

    public toggleVisibility(): void {
        this.isVisible = !this.isVisible
    }

    public show(): void {
        this.isVisible = true
    }

    public hide(): void {
        this.isVisible = false
    }

    public getCoords(): any {
        return [this.x, this.y]
    }

    public setCoords(x: number, y: number) {
        console.log(`width: ${this.width}, height: ${this.height}`)
        this.x = x - Math.floor(this.width / 2)
        this.y = y - Math.floor(this.height) - 30
    }

    public setDimensions(deviceWidth: number, deviceHeight: number) {
        this.width = Math.floor(deviceWidth / 4)
        this.height = Math.floor(deviceHeight / 3)
    }

    public setMarker(marker: any) {
        this.marker = marker
    }
}
