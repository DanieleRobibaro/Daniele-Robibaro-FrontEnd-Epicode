import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [163, 225, 292].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
