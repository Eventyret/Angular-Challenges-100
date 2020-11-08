import { Routes} from '@angular/router';
import { ComponentDocumentationComponent } from './views/component-documentation/component-documentation.component';
import { DirectiveDocumentationComponent } from './views/directive-documentation/directive-documentation.component';
import { PipeDocumentationComponent } from './views/pipe-documentation/pipe-documentation.component';
import { ServiceDocumentationComponent } from './views/service-documentation/service-documentation.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ComponentDocumentationComponent },
  { path: 'directives', component: DirectiveDocumentationComponent },
  { path: 'pipes', component: PipeDocumentationComponent },
  { path: 'services', component: ServiceDocumentationComponent },
];
