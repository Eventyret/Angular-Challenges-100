import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TopOfPageComponent,
    ToolbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
