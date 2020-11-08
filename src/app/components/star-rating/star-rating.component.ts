import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() public rating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }
  public get hasHalfStar(): boolean {
    const highestRating = 5;
    const hasHalfStar =
      this.rating - Math.floor(this.rating) > 0.5 &&
      this.rating !== highestRating;
    return hasHalfStar;
  }
  public get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }
}
