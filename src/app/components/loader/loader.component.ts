import { Component, Input } from '@angular/core';
import { LoaderType } from '../../models/loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;
}
