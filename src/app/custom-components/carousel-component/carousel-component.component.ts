import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css'],
})
export class CarouselComponentComponent {
  @Input() images!: string[];
  @Input() imgPath!: string;
}
