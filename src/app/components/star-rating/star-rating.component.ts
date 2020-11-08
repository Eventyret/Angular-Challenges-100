import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() public rating = 5;
  @Input() public maxRating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }
  public get hasHalfStar(): boolean {
    const hasHalfStar =
      this.rating - Math.floor(this.rating) > 0.5 &&
      this.rating !== this.maxRating;
    return hasHalfStar;
  }
  public get emptyStars(): number[] {
    const totalEmptyStars = Math.floor(this.maxRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }
}
