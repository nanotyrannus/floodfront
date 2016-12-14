import { Injectable } from "@angular/core"

@Injectable()
export class EnvironmentService {
    public baseUrl: string
    private apiPort: number = 8080
    constructor() {
        this.baseUrl = `${window.location.protocol}//${window.location.hostname}:${ this.apiPort }`
    }
}