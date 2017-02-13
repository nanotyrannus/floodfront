import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
const platform = platformBrowser();
console.log("AOT-compiled version")
platform.bootstrapModuleFactory(AppModuleNgFactory);
