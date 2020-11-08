import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ComponentDocumentationComponent } from './views/component-documentation/component-documentation.component';
import { ServiceDocumentationComponent } from './views/service-documentation/service-documentation.component';
import { PipeDocumentationComponent } from './views/pipe-documentation/pipe-documentation.component';
import { DirectiveDocumentationComponent } from './views/directive-documentation/directive-documentation.component';
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
    PipeDocumentationComponent,
    DirectiveDocumentationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
