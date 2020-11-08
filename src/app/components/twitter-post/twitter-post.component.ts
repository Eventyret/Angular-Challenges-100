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
    'Eventyret',
    'Javascript',
    'TypeScript',
    'Angular',
    '100AngularChallenges',
  ];

  constructor(public titleService: Title) {}

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()} and become an Angular GOD!`
    );
    return `${base} ${message}`;
  }
  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hashTags
    )}&related=Eventyret&url=${route}`;
  }
}
