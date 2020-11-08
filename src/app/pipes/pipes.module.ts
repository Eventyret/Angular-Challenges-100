import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PipeDocumentationComponent} from './pipe-documentation/pipe-documentation.component';
import { SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES} from './pipes.routes';



@NgModule({
  declarations: [PipeDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
