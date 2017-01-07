"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var leaflet_map_component_1 = require("./map/leaflet-map.component");
var login_component_1 = require("./login/login.component");
var event_component_1 = require("./event/event.component");
var rest_service_1 = require("./shared/rest.service");
var cookie_service_1 = require("./shared/cookie.service");
var navigation_service_1 = require("./shared/navigation.service");
var environment_service_1 = require("./shared/environment.service");
var user_service_1 = require("./user/user.service");
var event_service_1 = require("./event/event.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'map',
                    component: leaflet_map_component_1.LeafletMapComponent
                },
                {
                    path: '',
                    component: login_component_1.LoginComponent
                },
                {
                    path: 'event',
                    component: event_component_1.EventComponent
                }
            ]),
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            leaflet_map_component_1.LeafletMapComponent,
            event_component_1.EventComponent,
            login_component_1.LoginComponent
        ],
        providers: [
            environment_service_1.EnvironmentService,
            rest_service_1.RestService,
            user_service_1.UserService,
            event_service_1.EventService,
            cookie_service_1.CookieService,
            navigation_service_1.NavigationService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map