import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { CardComponent } from './components/card/card.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDocumentationComponent,
    CardComponent,
    AccordianComponent,
    ProgressbarComponent,
    StarRatingComponent,
    TopOfPageComponent,
    ToolbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
