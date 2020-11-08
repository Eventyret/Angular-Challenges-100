import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { LoaderComponent } from '../components/loader/loader.component';


@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent
  ],
  exports: [
    CardComponent,
    LoaderComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
