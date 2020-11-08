import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVE_ROUTES} from './directives.routes';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { DebounceClickDirective } from './debounce/debounce-click.directive';


@NgModule({
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective],
  imports: [CommonModule, RouterModule.forChild(DIRECTIVE_ROUTES)],
})
export class DirectivesModule {}
