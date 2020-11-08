import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ServiceDocumentationComponent} from './services/service-documentation/service-documentation.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordianComponent,
    ProgressbarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    ServiceDocumentationComponent,
    ComponentDocumentationComponent,
    DirectiveDocumentationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
