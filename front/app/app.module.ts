import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HashLocationStrategy, LocationStrategy } from "@angular/common"
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { LeafletMapComponent } from './map/leaflet-map.component'
import { LoginComponent } from './login/login.component'
import { EventComponent } from './event/event.component'
import { PopupComponent } from './map/popup.component'
import { MarkerMenuComponent } from './map/marker-menu.component'
import { MarkerNoteComponent } from './map/marker-note.component'
import { ModeComponent } from './mode/mode.component'
import { RestService } from './shared/rest.service'
import { CookieService } from './shared/cookie.service'
import { NavigationService } from './shared/navigation.service'
import { EnvironmentService } from './shared/environment.service'
import { UserService } from './user/user.service'
import { EventService } from './event/event.service'

@NgModule({
    imports: [
        BrowserModule, 
        RouterModule.forRoot([
            {
                path: 'map',
                component: LeafletMapComponent
            },
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'event',
                component: EventComponent
            },
            {
                path: 'select',
                component: ModeComponent
            }
        ], 
        {
            useHash : true
        }),
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MarkerMenuComponent,
        LeafletMapComponent,
        EventComponent,
        LoginComponent,
        PopupComponent,
        MarkerNoteComponent,
        ModeComponent
    ],
    providers: [
        EnvironmentService,
        RestService,
        UserService,
        EventService,
        CookieService,
        NavigationService, 
        {"provide" : LocationStrategy, "useClass" : HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

