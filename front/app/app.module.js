var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LeafletMapComponent } from './map/leaflet-map.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { PopupComponent } from './map/popup.component';
import { MarkerMenuComponent } from './map/marker-menu.component';
import { RestService } from './shared/rest.service';
import { CookieService } from './shared/cookie.service';
import { NavigationService } from './shared/navigation.service';
import { EnvironmentService } from './shared/environment.service';
import { UserService } from './user/user.service';
import { EventService } from './event/event.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
                }
            ], {
                useHash: true
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
        ],
        providers: [
            EnvironmentService,
            RestService,
            UserService,
            EventService,
            CookieService,
            NavigationService,
            { "provide": LocationStrategy, "useClass": HashLocationStrategy }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map