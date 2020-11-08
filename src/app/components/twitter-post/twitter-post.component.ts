import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
})
export class TwitterPostComponent {
  @Input() public baseHref = 'https://dehlin.dev';
  @Input() public hashTags: string[] = [
    'Simen Daehlin',
    'Javascript',
    'TypeScript',
    'Angular',
    '100 Angular Challanges',
  ];

  constructor(public titleService: Title) {}

  public get twitterMessage(): string {
    return '';
  }
}
