import {bootstrap} from '@angular/platform-browser-dynamic';

import {App} from './app/app';

//noinspection TypeScriptUnresolvedFunction
bootstrap(App, [])
.catch(err => console.error(err));
