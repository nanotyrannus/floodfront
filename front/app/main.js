import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
var platform = platformBrowser();
console.log("AOT-compiled version");
platform.bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map