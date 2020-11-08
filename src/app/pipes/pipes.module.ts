import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PipeDocumentationComponent} from './pipe-documentation/pipe-documentation.component';
import { SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES} from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CredircardFormatterPipe } from './creditcard/credircard-formatter.pipe';



@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe,  CredircardFormatterPipe],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
