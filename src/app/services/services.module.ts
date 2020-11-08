import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVICES_ROUTES } from './services.routes';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';

@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(SERVICES_ROUTES)],
})
export class ServicesModule {}
