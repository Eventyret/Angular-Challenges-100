import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss'],
})
export class LinkedinPostComponent {
  constructor(public router: Router) {}
  public get linkedInMessage(): string {
    return '';
  }
}
