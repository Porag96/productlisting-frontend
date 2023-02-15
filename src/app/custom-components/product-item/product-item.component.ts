import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;

  imgPath: any = 'http://34.135.250.251/api/image/';
}
