import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { COMPONENTS_ROUTES } from './components.routes';
import { AccordianComponent } from './accordian/accordian.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SharedModule } from '../shared/shared.module';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';


@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordianComponent,
    ProgressbarComponent,
    StarRatingComponent,
    CreditCardInputComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
  ],
})
export class ComponentsModule {}
