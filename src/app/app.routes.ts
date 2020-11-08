import { Routes } from '@angular/router';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ComponentDocumentationComponent },
  { path: 'directives', component: DirectiveDocumentationComponent },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  { path: 'services', component: ServiceDocumentationComponent },
];
